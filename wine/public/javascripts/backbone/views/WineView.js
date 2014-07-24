var Wineapp = Wineapp || { Models: {}, Collections: {}, Views: {} };

Wineapp.Views.WineView = Backbone.View.extend({
  // for CRUD functionality, but don't need listeners yet for only create.
  initialize: function(){
    this.listenTo( this.model, "all", this.render )
  },
  tagName: 'li',
  template: _.template( $('#wine-template').html() ),
  render: function(){
    this.$el.empty();
    this.$el.html( this.template( this.model.attributes ) );
    return this;
  }
});



