// The hello-world module exports a `helloWorld` function
var helloWorld = require('hello-world');

module.exports = function(event) {
  helloWorld();
};
