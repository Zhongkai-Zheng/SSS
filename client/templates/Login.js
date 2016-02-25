Template.login.events({
	'click #register': function(event){
			event.preventDefault();
			Router.go('/register');
		},

	'click #login': function(event){
		event.preventDefault();
		email = $('[name=email]').val();
		var password = $('[name=password]').val();
		Meteor.loginWithPassword(email, password, function(error){
			if(error){
				toastr.error("Password or username is incorrect");
				console.log(error.reason);
			} 
			else{
				toastr.success("Login successful!");
				Router.go("/");
			}
		});
	}
});
