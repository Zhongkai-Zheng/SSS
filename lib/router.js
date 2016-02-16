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
			return Images.findOne({_id: this.params._id});
		}
	});
}, {
	name: 'buybook2', 
	//template: 'BuyBook2'
});

Router.route('/reserved', {
	template: 'reserved'
});

Router.onBeforeAction('loading');