Template.ReservationDetail.events({
	'click #cancel': function () {
		
		var id = Router.current().params._id;


		Images.update({_id: id}, {$set: {reserved: false, reservedId: null}});

		Router.go('/reservations');
	}
});