// ***Model***
var Author =  Backbone.Model.extend({
  initialize: function(){
    console.log("An Author has been written into the books");
    this.set('books', new BookCollection());
  },
  defaults: {
    name: ""
  }
});

// ***Collection***
var AuthorCollection = Backbone.Collection.extend({
  model: Author
});

// ***View***

var AuthorView = Backbone.View.extend({
  initialize: function(){
    this.listenTo( this.model, 'change', this.render )
  },
  tagName: 'li',
  template: _.template($('#author-template').html()),
  render: function(){
    var self = this;
  // when you make a new view, pass in the el and the model
  // .$el is just an attribute!!!!!
    this.$el.empty();
    // repopulate
    this.$el.html(this.template(this.model.attributes));
    // any View takes a model and an element
    // What to display, where to display
    // the .find gets ahold of the child element
    var listView = new BookListView({ collection: this.model.get('books'), el: this.$el.find('.books') })
     listView.render();

    this.$el.find('form').on('submit', function(e){
      e.preventDefault();
      var titleField = self.$el.find('input[name="title"]');
      var title = titleField.val();
      titleField.val('');
      self.models.get("books").add({title: title})
    })

    return this
  }
});

var AuthorListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'all', this.render)
  },
  render: function(){
    var self = this;
    this.$el.empty();
    // each takes two things: what we want to iterate over, and the callback you want to apply
    _.each(this.collection.models, function(author){
      var authorView = new AuthorView({ model: author })
      self.$el.append(authorView.render().el)
    });
    return this
  }
})

$(function(){
  var author = new Author({ name: "Stephen King" });
  var authorCollection = new AuthorCollection;
  authorCollection.add(author);
  var authorListView = new AuthorListView({ collection: authorCollection, el: $("#author-list") })

$('#new-author').on('submit', function(e) {
  e.preventDefault();
  var nameField = $('.author-name');
  var authorName = nameField.val();
  nameField.val('');
  authorCollection.add({ name:authorName })
})

})
