const fp = require('lodash/fp');
const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

const webpackConfig = config => {
  config.plugins.push(
    new webpack.EnvironmentPlugin({
      API_SERVER_ORIGIN: 'http://localhost:3000',
      NODE_ENV: process.env.NODE_ENV,
      APP_MODE: process.env.APP_MODE,
    })
  );
  return config;
};

module.exports = fp.compose(
  withOffline,
  withSass,
)({
  // target: 'serverless',
  distDir: './functions/next',
  exportPathMap: function() {
    return {
      '/': { page: '/desktop' }
    };
  },
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
