const http = require('http');

const routes = require('../task10/routes')

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000 , console.log ("Server Started"));