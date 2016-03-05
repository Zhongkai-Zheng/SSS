Template.MyReservations.helpers({
	search: function () {
		return Images.find({reserved: true, reservedId: {$in: [Meteor.userId()]}});
	},
	noBooks: function () {
		if (Images.find({reserved: true, reservedId: {$in: [Meteor.userId()]}}).count() == 0) {
			return true;
		} else {
			return false;
		}
	}
});
