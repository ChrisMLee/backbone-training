var Wineapp = Wineapp || { Models: {}, Collections: {}, Views: {} };

  Wineapp.Views.WineListView = Backbone.View.extend({
    initialize: function(){
      this.listenTo(this.collection, "add", this.render)
    },
    render: function(){
      var self = this;
      this.$el.empty();
      _.each(this.collection.models, function(wine){
        console.log("listView")
        console.log(wine)
        var WineView = new Wineapp.Views.WineView({ model: wine });
        self.$el.append( WineView.render().el )
      })
    },
    events: {
        'submit .wineform': 'saveWine'
    },
    saveWine: function(event){
        console.log('testing');
        router.navigate('', {trigger: true});
        return false;
      }

  })
