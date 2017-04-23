const mockResponse = require('./mockData.json');

function test(req, res) {
    res.status(200).json(mockResponse);
}

module.exports = test;
