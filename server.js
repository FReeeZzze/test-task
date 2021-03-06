// const { createServer } = require('http');
// const next = require('next');
//
// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();
//
// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = new URL(req.url, 'http://localhost:3000');
//     const { pathname, query } = parsedUrl;
//
//     if (pathname === '/api') {
//       app.render(req, res, '/api', query);
//     } else {
//       handle(req, res, parsedUrl);
//     }
//   }).listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
