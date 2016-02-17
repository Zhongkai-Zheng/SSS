Meteor.methods({
	email: function(options) {
		this.unblock();
		Email.send(options);
	}
});