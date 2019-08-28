const fp = require('lodash/fp');
const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

const { mongodb } = require('./secret');

const webpackConfig = config => {
  config.plugins.push(
    new webpack.EnvironmentPlugin({
      API_SERVER_ORIGIN: 'http://localhost:3000',
      MONGODB_URI: 'mongodb.uri',
    })
  );
  return config;
};

module.exports = fp.compose(
  withOffline,
  withSass,
)({
  // target: 'serverless',
  webpack: webpackConfig,
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /[.](png|jpg|ico|css)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'assets-cache',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^https:\/\/code\.getmdl\.io.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'lib-cache'
        }
      },
      {
        urlPattern: /^http.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'http-cache'
        }
      }
    ]
  }
});
