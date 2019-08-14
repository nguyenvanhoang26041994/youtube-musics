const express = require('express');
const next = require('next');
const { join } = require('path');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.static('static'));

    server.get('*', (req, res) => {
      const pathname = parse(req.url).pathname;

      if (pathname === '/service-worker.js') {
        app.serveStatic(req, res, join(__dirname, '.next', '/service-worker.js'));
        return;
      }
      return handle(req, res);
    });

    server.listen(process.env.PORT || 3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
