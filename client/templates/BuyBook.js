Template.buybook.rendered = function() {
  Session.set('clickedImage', null);
}

Template.buybook.created = function() {
  var self = this;

  self.limit = new ReactiveVar;
  self.limit.set(parseInt(Meteor.settings.public.recordsPerPage));
  
  Tracker.autorun(function() {
    Meteor.subscribe('images', self.limit.get());
  });
}

Template.buybook.helpers({
	'clickedImage': function() {
    return this._id == Session.get('clickedImage') ? 'text-primary' : '';
  },
 	'images': function() {
    return Images.find();
  },
  'selectedImage': function(){
    var title = this.title;
    return "selected"
  },
});

  Template.buybook.events({
  	'click .assignment': function() {
    Session.set('clickedImage', this._id);
  },
  
});
