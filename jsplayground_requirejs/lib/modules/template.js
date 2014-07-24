define(['underscore', 'jquery'], function() {
  var showName = function(n) {
    var temp = _.template("<h1>Hello <%= name %></h1>");
    $("body").html(temp({name: n}));
  };
  return {
    showName: showName
  };
});
