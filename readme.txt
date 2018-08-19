1. request Client.

It is a simple npm module we use to get some response for http calls.
In order to use it:
var request = require('request');


2. request has a callback function as a second argument which gets executed once http request is completed and response is received.

request('{url: <Some-HTTP-request-URL>'}, function(error, response ,body) {
});


3. you can receive the http response in JSON format by setting json flag true in first request parameter.

request({'<Some-HTTP-request-URL>', json: true}, function(error, response ,body) {
});


4. We can pretty print json object with following trick,

JSON.stringify(body, undefined, 2);


5. You can encode a string with spaces using encodeURIComponent() method of nodejs.
This is necessary step as you would require this to encode strings while querying http apis.
eg. encodeURIComponent('Shriniwas Surve') would return 'Shriniwas%20Surve'


6. In order to run callback function you need to state callback method parameters.
eg. function (<functionArg>, (<callbackArguments>) => {})

Inside method defination  you can set callback parameter values using callback method.
eg. function = (<functionArg>, callback) => {
callback('send some message');
}
