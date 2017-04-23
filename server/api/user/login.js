const mockResponse = require('./mockData.json');

function isValidLogin(username, password) {
    return (username === 'test' && password === 'test');
}

function login(req, res) {
    console.log('req: ', req);
    console.log('req.body: ', req.body);
    const { username, password } = req.body;
    if (!isValidLogin(username, password)) {
        return res.status(400).end();
    }

    return res.status(200).json(mockResponse);
}

module.exports = login;
