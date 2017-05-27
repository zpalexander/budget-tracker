const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const compress = require('compression');
const logConstants = require('../../constants/logger');

function middleware(app) {
    app.use(morgan(logConstants.format));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(compress());
    return app;
}

module.exports = middleware;
