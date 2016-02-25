Template.history.rendered = function() {
	Session.set('selected', null);
}

Template.history.helpers({
	'images': function() {
		return Images.find({userId: Meteor.userId()}, {sort: {createdAt: -1}});
	},
	'isSelected': function() {
		if (this._id == Session.get('selected')) {
			return 'selected'
		} else {
			return '';
		}
	}
});
//how to make history last forever
//'click #reserve': function() {
Template.history.events({
	'click .images': function() {
		Session.set('selected', this._id);
	},

	'click #delete': function() {
		Images.remove(Session.get('selected'));
	}
});

