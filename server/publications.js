Meteor.publish('images', function(limit) {
	check(limit, Number);

	if (limit != 0) {
		return Images.find({}, {
			limit: limit
		});
	} else {
		return Images.find();
	}
});