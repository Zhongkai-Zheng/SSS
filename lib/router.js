 Router.configure({
	//layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'main', 
	template: 'main'
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
	template: 'sellbook'
});

Router.route('/buybook2', {
	name: 'BuyBook2', 
	template: 'BuyBook2'
});

Router.onBeforeAction('loading');