//PlayersList = new Mongo.Collection('books');
Template.SellBook.events({
	'submit form': function(event, template){

		event.preventDefault();
		if (Meteor.userId() == null) {
			throw new Meteor.Error('unauthorized', 'you need to be logged in for that!');
		}

		if (Meteor.user() != null) {			
			var user = Meteor.user();
			var fileInput = event.target.fileInput;
			var files = fileInput.files;
			var title = event.target.title.value;
			var firstname = event.target.firstname.value;
			var lastname = event.target.lastname.value;
			var isbn = event.target.isbn.value; 
			var reserved = false;

		for (var i = 0, ln = files.length; i < ln; i++) {
			var newFile = new FS.File(files[i]);
			newFile.username = Meteor.user().emails[0].address;
			newFile.userId = user._id;
			newFile.title = title;
			newFile.firstname = firstname + " ";
			newFile.lastname = lastname;
			newFile.isbn=isbn;
			newFile.reserved = reserved;
			newFile.reservedId = null;
			newFile.createdAt = new Date();
			}


			// TODO: Create GridFS collection and add that here

			Images.insert(newFile, function (err, fileObj) {
				if (err) {
					console.log(err);
				} else {
					console.log("Success");
				}
			});

			Router.go('/buybook');
		}
	}
})