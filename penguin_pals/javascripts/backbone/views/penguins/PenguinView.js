var Penguinapp = Penguinapp || { Models: {}, Collections: {}, Views: {} };

Penguinapp.Views.PenguinView = Backbone.View.extend({
	// Don't need a listener for create.  Will un-comment when we get to the delete
	// initialize: function(){
	// 	this.listenTo( this.model, "change", this.render )
	// },
	tagName: 'li',
	template: _.template( $('#penguin-template').html() ),
	render: function(){
		this.$el.empty();
		this.$el.html(this.template( this.model.attributes ));

		return this
	}	
});