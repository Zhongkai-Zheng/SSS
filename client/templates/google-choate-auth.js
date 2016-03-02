if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.shun.helpers({
    'isShunned': function() {
      if (Meteor.userId() == null) {
        return true;
      }
      var email = Meteor.user().services.google.email;
      if (/(\@choate\.edu)/.test(email)) {
        return /[0-9]/.test(email);
      }
      return true;
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}