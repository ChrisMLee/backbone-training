var Wineapp = Wineapp || { Models: {}, Collections: {}, Views: {} };

Wineapp.initialize =  function(){

  var collection = new Wineapp.Collections.WineCollection();

  var listView = new Wineapp.Views.WineListView({
    collection: collection,
    el: $('.wine-list')
  });

  collection.fetch();

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
