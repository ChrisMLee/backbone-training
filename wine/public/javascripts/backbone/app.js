var Wineapp = Wineapp || { Models: {}, Collections: {}, Views: {} };

Wineapp.initialize =  function(){

  var collection = new Wineapp.Collections.WineCollection();

  var listView = new Wineapp.Views.WineListView({
    collection: collection,
    el: $('.wine-list')
  });

  collection.fetch();

  var Router = Backbone.Router.extend({
      routes:{
        '' : 'home',
      }
    });


  var router = new Router();

  router.on('route:home', function() {
    console.log("you are home!");
    listView.render();
  });

  Backbone.history.start();

  // $('.wines').find('form').on('submit', function(e){
  //   e.preventDefault();
  //   var wineName = $('input').val();
  //   $('input').val('')
  //   collection.create({name: wineName})
  // })

}

$(function(){
  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
  };

  $('body').hide();
  Wineapp.initialize();
  $('body').fadeIn(1500);
});
