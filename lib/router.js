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

Router.route('/buybook2', {
	name: 'buybook2', 
	template: 'BuyBook2'
});

Router.onBeforeAction('loading');