const request = require('request');

var geoCodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);
    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      // console.log(JSON.stringify(body, undefined, 2));
      if (error) {
        reject('Unable to connect to google servers');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address');
      } else if (body.status === 'OVER_QUERY_LIMIT') {
        reject(body.error_message);
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          lattitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geoCodeAddress('nashik').then((location) => {
  console.log('location: ',JSON.stringify(location, null, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
