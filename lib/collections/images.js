//FS.debug = true;

if (Meteor.isServer) {
 	
 	var imageStore = new FS.Store.S3("images", {
    /* REQUIRED */
    accessKeyId: Meteor.settings.AWSAccessKeyId, 
    secretAccessKey: Meteor.settings.AWSSecretAccessKey, 
    bucket: Meteor.settings.AWSBucket
  });

	Images = new FS.Collection("images", {
		stores: [imageStore],
		filter: {

		}
	});

	Images.allow({
		insert: function(userId) { return userId != null; },
		update: function(userId, image) { return userId === image.userId; },
		remove: function(userId, image) { return userId === image.userId; },
		download: function() { return true; } 
	});
}

if (Meteor.isClient) {
	var imageStore = new FS.Store.S3("images", {
    /* REQUIRED */
    accessKeyId: Meteor.settings.AWSAccessKeyId, 
    secretAccessKey: Meteor.settings.AWSSecretAccessKey, 
    bucket: Meteor.settings.AWSBucket
  });

	Images = new FS.Collection("images", {
		stores: [imageStore],
		filter: {

		}
	});
}