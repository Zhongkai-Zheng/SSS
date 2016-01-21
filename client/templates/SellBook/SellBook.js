Template.SellBook.events({
	'submit form': function(event, template){

		event.preventDefault();
		bounceLoggedOut();

		if (Meteor.user() != null) {			
			var user = Meteor.user();
			var fileInput = event.target.fileInput;
			var files = fileInput.files;

			var title = event.target.title;
			var firstname = event.target.firstname;
			var lastname = event.target.lastname;

		for (var i = 0, ln = files.length; i < ln; i++) {
			var newFile = new FS.File(files[i]);
			newFile.username = Meteor.user().emails[0].address;
			newFile.userId = user._id;
			newFile.title = title;
			newFile.firstname = firstname;
			newFile.lastname = lastname;
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