const express = require('express');
const path = require('path');

function server(app) {
    const buildPath = path.resolve(__dirname, '..', 'build');
    const htmlFilePath = path.resolve(__dirname, '..', 'build', 'index.html');
    app.use(express.static(buildPath));
    app.get('*', (req, res) => express.static(htmlFilePath));
    return app;
}

module.exports = server;
