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
  'noBooks': function() {
  		if (Images.find().count() == 0) {
  			return true;
  		} else {
  			return false;
  		}
  	},

});

  Template.buybook.events({
  	'click .assignment': function() {
    Session.set('clickedImage', this._id);
  },

    'click .text':function(){
    Session.set('clickedImage', this._id);
    console.log("you clicked on the thing");
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
  Session.set('search-box', '');
  var self = this;
 
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      incrementLimit(self);
    }
  });
}

Template.buybook.helpers({
  'images': function() {
    return Images.find({});
  },
  search: function() {
    var search = Session.get('search-box');
    if (search == '') {
      return Images.find({}, {$sort: {title: 1}}); 
    } else if (search !='' && !$('#searchbyisbn').prop('checked')){
      return Images.find({title: {$regex: '(' + search + ')', $options: 'i'}}, {$sort: {title: 1}});
    } else {
      return Images.find({isbn: {$regex: '(' + search + ')', $options: 'i'}}, {$sort: {isbn: 1}});
    }
  }
});

var incrementLimit = function(templateInstance) {
  var newLimit = templateInstance.limit.get() + 
    parseInt(Meteor.settings.public.recordsPerPage);
  templateInstance.limit.set(newLimit);
}
var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['packageName', 'description'];


Template.searchResult.helpers({
  
});

Template.searchBox.events({
  "keyup #search-box": function(ev) {
    Session.set('search-box', $(ev.target).val());
  }
});
