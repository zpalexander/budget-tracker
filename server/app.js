const express = require('express');
const middleware = require('./bootstrap/middleware');
const routes = require('./bootstrap/routes');
const server = require('./bootstrap/server');

// Initialize Express app
const app = express();
middleware(app);
routes(app);
server(app);

// Export server
module.exports = app;
