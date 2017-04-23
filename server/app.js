// Contrib
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const compress = require('compression');
const path = require('path');
// Routes
const { LOGIN, PURCHASES, PROFILE } = require('../constants/routes/api');
const loginRouter = require('./api/user/login');
const purchasesRouter = require('./api/purchases');
const profileRouter = require('./api/profile');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compress());

app.post(LOGIN, loginRouter);
app.get(PURCHASES, purchasesRouter);
app.get(PROFILE, profileRouter);

// Serve static assets
const buildPath = path.resolve(__dirname, '..', 'build');
const htmlFilePath = path.resolve(__dirname, '..', 'build', 'index.html');
app.use(express.static(buildPath));
app.get('*', (req, res) => express.static(htmlFilePath));

module.exports = app;
