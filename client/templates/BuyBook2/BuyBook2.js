Template.BuyBook2.events({
	'click #reserve': function() {
		console.log(Router.current().params._id);
	},
});