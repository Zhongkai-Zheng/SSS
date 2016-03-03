Template.register.events({
		'submit form': function(event){
			event.preventDefault();
			var email = $('[name=email]').val();
			var password = $('[name=password]').val();
			var confirmationCode = Math.floor(Math.random()*100000);

			Meteor.call('email', {
			to: email,
			from: 'sssbookexchange@gmail.com',
			subject: 'Thank you for registering an SSS account!',
			text: 'Thank you for registering an SSS account! \n Your confirmation code: '+ confirmationCode
		});

			Meteor.call('sendthething', function(err, ret) {
    			console.log(err);
   			 	console.log('ret')
});

			Accounts.createUser({email: email, password: password}, function(error){
				if(error) {
					toastr.error("Username is invalid or already exists!");
					console.log(error.reason); 
				} else {
					toastr.success("Register successful!")
					Router.go("buybook"); 
				}
			});
			console.log("is going through");
		}
});