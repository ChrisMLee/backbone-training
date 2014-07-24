var Wineapp = Wineapp || { Models: {}, Collections: {}, Views: {} };

Wineapp.Models.Wine = Backbone.Model.extend({
  initialize: function(){
    console.log("a wine has been created");
  },
  defaults: {
    name: ''
  }
});
