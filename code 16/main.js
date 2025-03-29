// const http = require('node:http');
// const fs = require('fs');   This required is used to import modules in type commonjs.

// import http from "http";  This import is used to import modules in type modules.

import {a, b, c} from "./myserver.js";  // This is named import.
console.log(a, b, c, __dirname, __filename);  // This is named import.

import obj from "./myserver.js";  // This is default import.
console.log(obj);  // This is default export.



// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> Hello World </h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });