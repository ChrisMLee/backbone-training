var authorCollection,
		authorListView;


$(function(){

	authorCollection = new AuthorCollection();
	authorListView = new AuthorListView({ collection: authorCollection, el: $("#author-list") });
	var author = new Author({ name: "Stephen King" });
	authorCollection.add(author);

	$('#new-author').on('submit', function(e){
		e.preventDefault();
		var nameField = $('#author-name');
		var authorName = nameField.val();
		nameField.val('');
		authorCollection.add({ name: authorName });
	})

})