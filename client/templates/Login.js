Template.login.events({
	'click #register': function(event){
			event.preventDefault();
			Router.go('register');
		},

	'submit form': function(event){
		event.preventDefault();
		email = $('[name=email]').val();
		var password = $('[name=password]').val();
		Meteor.loginWithPassword(email, password, function(error){
			if(error){
				console.log(error.reason);
			} 
			else{
				Router.go("home");
			}
		});
	}
});
