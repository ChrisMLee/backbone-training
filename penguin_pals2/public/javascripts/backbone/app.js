var Penguinapp = Penguinapp || { Models: {}, Collections: {}, Views: {} };
var collection;

Penguinapp.initialize = function(){
	collection = new Penguinapp.Collections.PenguinCollection();

	var listView = new Penguinapp.Views.PenguinListView({
		collection: collection,
		el: $('.penguin-list')
	});

	// listView.render();
	collection.fetch();

	$('.penguins').find('form').on('submit', function(e){
		e.preventDefault();
		var penguinName = $('input').val();
		$('input').val('')
		collection.create({name: penguinName})
	})
}



$(function(){

	Penguinapp.initialize();

});