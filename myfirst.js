// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World!');
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:8080');
});