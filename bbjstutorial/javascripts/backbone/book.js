// ***Model***

var Book = Backbone.Model.extend({
  initialize: function(){
    console.log("A book has been written");
  },

  defaults: {
    title: ""
  }
});

//***Collection***

var BookCollection = Backbone.Collection.extend({
  model: Book
});

//***View***

//Assembles the Book
var BookView = Backbone.View.extend({
  initialize: function(){
    // you can put anything where render is
    this.listenTo(this.model, 'all', this.render)
    this.listenTo(this.model, 'destroy', this.remove)
  },
  tagName: 'li',
  template: _.template( $('#book-template').html() ),
  render: function(){
    this.$el.empty();
    this.$el.html(this.template(this.model.attributes));

    return this
  },
  events:{
    'click button[name="delete_book"]': 'removeBook'
  },
  removeBook: function(){
    this.model.destroy();
    // any time you update a view, you have to return it
    return this
  }
});

//Ties the author and book together in the ListView
// Because you used the Book collection on initialize, Book ListView is the logical place for everything to be tied together
// Booklist view doesn't need a template

var BookListView = Backbone.View.extend(){
  initialize: function(){
    this.listenTo(this.collection, 'all', this.render)
  },
  render: function(){
    // we know that we'll be iterating and we'll need the context of that individual list view
    var self = this;
    this.$el.empty();
    _.each(this.collection.models, function(book)){
      var bookView = new BookView({ model: book });
      //
      self.$el.append( bookView.render().el )
    })
    return this
  }
});
