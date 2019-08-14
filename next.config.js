const fp = require('lodash/fp');
const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass');

module.exports = fp.compose(
  withOffline,
  withSass,
)({
  // target: 'serverless',
  registerSwPrefix: '/_next',
  workboxOpts: {
    swDest: 'service-worker.js',
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
