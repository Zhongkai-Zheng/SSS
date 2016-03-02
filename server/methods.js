Meteor.methods({
  'email': function(options) {
    this.unblock();
    console.log("email");
    Email.send(options);
  },

  'sendthething': function(){
    console.log('hi');
    Accounts.sendVerificationEmail({userId: userId});
  },
});

