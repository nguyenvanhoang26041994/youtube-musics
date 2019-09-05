const functions = require('firebase-functions');
const next = require('next');

const app = next({ dev: false, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

let isPrepared = false;
app.prepare().then(() => { isPrepared = true; });

module.exports.next = functions.https.onRequest((request, response) => {
  if (isPrepared) {
    return handle(request, response);
  }

  return response.send('isPrepared = false');
});
