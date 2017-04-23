const mockResponse = require('./mockData.json');

function getProfile(req, res) {
    res.status(200).json(mockResponse);
}

module.exports = getProfile;
