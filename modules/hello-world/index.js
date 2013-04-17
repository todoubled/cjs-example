// Define a Backbone view privately
var HelloWorld = Backbone.View.extend({
  render: function() {
    $('body').append('<h1>Hello World</h1>');
  }
});


// Only export a function that instantiates and renders a new HelloWorld view
module.exports = function() {
  new HelloWorld().render();
};
