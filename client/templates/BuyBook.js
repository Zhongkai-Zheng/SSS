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

  }
});

  Template.buybook.events({
  	'click .assignment': function() {
    Session.set('clickedImage', this._id);
  },
  
});

  Template.buybook.created = function() {
  var self = this;

  self.limit = new ReactiveVar;
  self.limit.set(parseInt(Meteor.settings.public.recordsPerPage));
  
  Tracker.autorun(function() {
    Meteor.subscribe('images', self.limit.get());
  });
}

Template.buybook.rendered = function() {
  var self = this;
  // is triggered every time we scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      incrementLimit(self);
    }
  });
}

Template.buybook.helpers({
  'images': function() {
    return Images.find();
  }
});

var incrementLimit = function(templateInstance) {
  var newLimit = templateInstance.limit.get() + 
    parseInt(Meteor.settings.public.recordsPerPage);
  templateInstance.limit.set(newLimit);
}
