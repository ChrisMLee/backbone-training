$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
});

var Users = Backbone.Collection.extend({
  url: '/users'
});

var UserList = Backbone.View.extend({
  el: '.page',
  render: function(){
    var that = this;
    var users = new Users();
    users.fetch({
      // on success, users function is passed down into template
      success: function (users){
        var template = _.template($('#user-list-template').html(),{users: users.models});
        that.$el.html(template);
      }
    })
  }
});

var Router = Backbone.Router.extend({
  routes:{
    '' : 'home',
    'new' : 'editUser'
  }
});

$(function(){
  var router = new Router();
  var userList = new UserList();

  router.on('route:home', function() {
  console.log("you are home!");
  userList.render();
  });
  router.on('route:editUser', function() {
  console.log('show user form');
  });

  Backbone.history.start();
})
