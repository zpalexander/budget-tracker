const mockResponse = require('./mockData.json');

function purchases(req, res) {
    res.status(200).json(mockResponse);
}

module.exports = purchases;
