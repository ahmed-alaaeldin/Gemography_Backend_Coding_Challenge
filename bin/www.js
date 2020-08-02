var http = require("http");

// Enviroment variables
const defaultPort = 3000;
const port = process.env.PORT || defaultPort;

// Start API
const app = require("../app");
const server = http.createServer(app);
server.listen(port, function () {
  console.log("API live on port " + port);
});
