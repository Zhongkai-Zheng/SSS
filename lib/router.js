 Router.configure({
	//layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'home', 
	template: 'home'
});

Router.route('/login', {
	name: 'login', 
	template: 'login'
});
Router.route('/guide', {
	name: 'guide', 
	template: 'guide'
});
Router.route('/history', {
	name: 'history', 
	template: 'history'
});
Router.route('/about', {
	name: 'about', 
	template: 'about'
});

Router.route('/register', {
	name: 'register', 
	template: 'register'
});

Router.route('/buybook', {
	name: 'buybook', 
	template: 'buybook'
});

Router.route('/sellbook', {
	name: 'sellbook', 
	template: 'SellBook'
});

Router.route('/buybook2/:_id', function () {
	this.render('BuyBook2', {
		data: function () {
			return Images.findOne({_id: this.params._id, reserved: false});
		}
	});
}, {
	name: 'buybook2', 
	//template: 'BuyBook2'
});

Router.route('/reservationDetail/:_id', function () {
	this.render('ReservationDetail', {
		data: function () {
			return Images.findOne({_id: this.params._id, reserved: true});
		}
	});
}, {
	name: 'reservationDetail',
});

// THIS IS RESERVATION CONFIRMATION
Router.route('/reserved', {
	template: 'reserved'
});

// THIS IS LIST OF RESERVATIONS
Router.route('/reservations', {
	template: 'MyReservations',
	name: 'reservations'
});

Router.onBeforeAction('loading');