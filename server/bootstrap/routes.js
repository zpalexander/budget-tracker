const { LOGIN, PURCHASES, PROFILE } = require('../../constants/routes/api');
const loginRouter = require('../api/user/login');
const purchasesRouter = require('../api/purchases');
const profileRouter = require('../api/profile');

function routes(app) {
    // Declare routes
    app.post(LOGIN, loginRouter);
    app.get(PURCHASES, purchasesRouter);
    app.get(PROFILE, profileRouter);
}

module.exports = routes;
