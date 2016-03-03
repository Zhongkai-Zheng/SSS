var confirmationCode = Math.floor(Math.random()*100000);
var sentCode = false;

Template.register.events({
		'click #register': function(event){
			event.preventDefault();
			var email = $('[name=email]').val();
			var password = $('[name=password]').val();
			var typedCode = $('[name=code]').val();

			if(typedCode == confirmationCode){
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
			else{
				toastr.error("Wrong confirmation code!");
			}
		},

		'click #sendcode': function(event){
			event.preventDefault();
			var email = $('[name=email]').val();
			var password = $('[name=password]').val();
			if(sentCode == false)
		{
			Meteor.call('email', {
			to: email,
			from: 'sssbookexchange@gmail.com',
			subject: 'Thank you for registering an SSS account!',
			text: 'Thank you for registering an SSS account! \n Your confirmation code: '+ confirmationCode
			});
			toastr.success("Code sent!");
		}
			if(sentCode == true)
		{
			toastr.error("Already sent code to this user!");
		}
			sentCode = true;
	}
});


