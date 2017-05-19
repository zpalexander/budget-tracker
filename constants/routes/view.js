/* General */
const LOGIN = {
    name: 'Login',
    path: '/',
};

const NOT_FOUND = {
    name: 'Not Found',
    path: '/404',
};

/* Nav */
const TODAY = {
  name: 'Today',
  path: '/today',
};

const PROFILE = {
  name: 'Spending Profile',
  path: '/profile',
};

const navList = [
  TODAY,
  PROFILE,
];

/* Exports */
module.exports = {
    LOGIN: LOGIN,
    NOT_FOUND: NOT_FOUND,
    TODAY: TODAY,
    PROFILE: PROFILE,
    navList: navList,
};
