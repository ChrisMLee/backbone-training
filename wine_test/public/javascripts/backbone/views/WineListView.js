var Wineapp = Wineapp || { Models: {}, Collections: {}, Views: {} };

  Wineapp.Views.WineListView = Backbone.View.extend({
    tagName:'ul',
    initialize: function(){
      this.listenTo(this.collection, "all", this.render)
    },
    render: function(){
      var self = this;
      this.$el.empty();
      _.each(this.collection.models, function(Wine){
        console.log("ListView")
        console.log(Wine)
        var WineView = new Wineapp.Views.WineView({ model: Wine });
        self.$el.append( WineView.render().el )
      })
    },
    events: {
        'submit .wineform': 'saveWine'
    },
    saveWine: function(ev){
        ev.preventDefault();
        var wineName = $(ev.currentTarget).serializeObject();
        $(ev.currentTarget).val('');
        var wine = new Wineapp.Models.Wine();
        wine.save(wineName, {
          success: function(user){
            console.log("suceeded. new wine is: " + wineName);
          }
        })

        return false;
      }

  })
