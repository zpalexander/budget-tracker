const app = require('./app');

const PROTOCOL = process.env.HTTPS === 'true' ? 'https' : 'http';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`App listening at ${PROTOCOL}://${HOST}:${PORT}`));
