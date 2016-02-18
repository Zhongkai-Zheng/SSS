Template.MyReservations.helpers({
	search: function () {
		return Images.find({reserved: false, reservedId: Meteor.userId()});
	}
});