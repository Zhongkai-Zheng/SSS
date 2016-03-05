Template.ReservationDetail.events({
	'click #cancel': function () {
		
		var id = Router.current().params._id;

		

		if (Images.findOne({_id: id}, {fields: {reservedId: 1}}).reservedId.length == 1) {
			Images.update({_id: id}, {$set: {reserved: false}, $pull: {reservedId: Meteor.userId()}});
		} else {
			Images.update({_id: id}, {$pull: {reservedId: Meteor.userId()}});
		}

		Router.go('/reservations');
	}
});