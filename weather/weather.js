const request = require('request');

getWeather= (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/e9633409e2c51f4cc08b92d4803ed0fb/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
         temperature: body.currently.temperature,
         apparentTemperature: body.currently.apparentTemperature
       });
    } else {
      callback('Unable to fetch weather');
    }
  });
}

module.exports = {
  getWeather
};
