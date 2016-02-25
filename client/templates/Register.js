Template.register.events({
		'submit form': function(event){
			event.preventDefault();
			var email = $('[name=email]').val();
			var password = $('[name=password]').val();

			Accounts.createUser({email: email, password: password}, function(error){
				if(error) {
					toastr.error("Username is invalid or already exists!");
					console.log(error.reason); 
				} else {
					toastr.success("Register successful!")
					 Router.go("login"); 
				}
			});
		}
});