UI.registerHelper('bounceLoggedOut', function() {
	console.log(Meteor.userId());
	if (Meteor.userId() == null) {
		Router.go('login');
	}
})