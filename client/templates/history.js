Template.history.helpers({
	'book': function() {
    	return Images.find({userId: Meteor.userId()}, {sort: {createdAt: -1}});
	}
});