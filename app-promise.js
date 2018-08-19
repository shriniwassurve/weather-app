
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
  a:{
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

const encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address');
  }
  console.log(response.data.results[0].formatted_address);
  var lat = response.data.results[0].geometry.location.lat;
  var long = response.data.results[0].geometry.location.lat;
  var weatherURl =`https://api.darksky.net/forecast/e9633409e2c51f4cc08b92d4803ed0fb/${lat},${long}`;
  return axios.get(weatherURl);
}).then((response) => {
  var temp = response.data.currently.temperature;
  var apparentTemp = response.data.currently.apparentTemperature;
  console.log(`Its currently ${temp}. It feels like ${apparentTemp}`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND') {
    console.log('Unable to connect to api servers');
  } else {
    console.log(e);
  }
});
