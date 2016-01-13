Template.buybook.rendered = function() {
  Session.set('clickedAssignment', null);
}

Template.buybook.helpers({
	'clickedAssignment': function() {
    return this._id == Session.get('clickedAssignment') ? 'text-primary' : '';
  },

});

  Template.buybook.events({
  	'click .assignment': function() {
    Session.set('clickedAssignment', this._id);
  },
  
});
