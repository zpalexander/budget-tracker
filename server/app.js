// Contrib
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// Routes
const { PURCHASES } = require('../constants/routes/api');
const purchasesRouter = require('./api/purchases');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Setup body parser
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get(PURCHASES, purchasesRouter);

// Serve static assets
const buildPath = path.resolve(__dirname, '..', 'build');
const htmlFilePath = path.resolve(__dirname, '..', 'build', 'index.html');
app.use(express.static(buildPath));
app.get('*', (req, res) => express.static(htmlFilePath));

module.exports = app;
