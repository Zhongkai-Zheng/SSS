bounceLoggedOut = function() {
	if (Meteor.userId() == null) {
		throw new Meteor.Error('unauthorized', 'you need to be logged in for that!');
	}
}