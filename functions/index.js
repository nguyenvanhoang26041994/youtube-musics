const functions = require('firebase-functions');
const next = require('next');

const app = next({ dev: false, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

module.exports.next = functions.https.onRequest((request, response) => {
  return app.prepare().then(() => handle(request, response))
});
