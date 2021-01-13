const postman_request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0058ab262a33a46c12b29fa44ce8070c&query=' + latitude +
        ',' + longitude;

    postman_request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.error) {
            callback('Unable to find location .', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. ' +
                'It is current ' + body.current.temperature + ' degrees out. ' +
                'It feels like ' + body.current.feelslike + ' degrees out.');
        }
    });
};

module.exports = forecast;