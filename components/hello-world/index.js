var HelloWorld = Backbone.View.extend({
  render: function() {
    $('body').append('<h1>Hello World</h1>');
  }
});


module.exports = function() {
  new HelloWorld().render();
};
