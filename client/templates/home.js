Template.home.helpers({
  'email': function() {
  	try {
    	return Meteor.user().emails[0].address;
	} catch (e) {
		// silently kill errors
	}
  }
})