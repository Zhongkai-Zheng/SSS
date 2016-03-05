Template.BuyBook2.events({
	'click #reserve': function() {
		//console.log(Router.current().params._id);

		var id = Router.current().params._id;
		var title = Images.findOne({_id: id}).title;
		var emailTo = Images.findOne({_id: id}).username;
		var emailFrom = Meteor.user().emails[0].address;;

		var text = 'Hello,\n	You have received an offer on your book, '+title+', from a user at '+emailFrom+". Please contact them soon to set up an exchange.\n\nSincerely, the SSS Team";

		Images.update({_id: id}, {$set: {reserved: true}, $addToSet: {reservedId: Meteor.userId()}});

		// Email.send({
		// 	to: emailTo,
		// 	from: 'sssbookexchange@gmail.com',
		// 	subject: 'You\'ve received an offer on your book, '+title,
		// 	text: text
		// });

		Meteor.call('email', {
			to: emailTo,
			from: 'sssbookexchange@gmail.com',
			subject: 'You\'ve received an offer on your book, '+title,
			text: text
		});

		Router.go('/reserved');
	},
});