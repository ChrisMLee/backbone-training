var Wineapp = Wineapp || { Models: {}, Collections: {}, Views: {} };

Wineapp.Collections.WineCollection = Backbone.Collection.extend({
  // comma
  model: Wineapp.Models.Wine,
  url: '/wines'
});
