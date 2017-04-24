const mockResponse = require('./mockData.json');

function isValidLogin(username, password) {
    return (username === 'test' && password === 'test');
}

function login(req, res) {
    const { username, password } = req.body;
    if (!isValidLogin(username, password)) {
        return res.status(400).end();
    }

    return res.status(200).json(mockResponse);
}

module.exports = login;
