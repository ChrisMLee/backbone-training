require.config({
  paths: {
    "jquery": "lib/jquery",
    "underscore": "lib/underscore",
  }
});

require(['lib/modules/template'], function(template) {
  template.showName("Fred");
});
