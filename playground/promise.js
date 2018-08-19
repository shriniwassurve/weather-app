var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 2000);
  });
};

asyncAdd(5, 7).then((res) => {
  console.log('Result:', res);
  return asyncAdd(res, 34);
}).then((res) => {
  console.log('Next Result:', res);
}).catch((errorMessage) => {
  console.log('Error:', errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(()=> {
//     // resolve('Hey. It worked!');
//     reject('Unable to fulfill promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('success', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
