Handlebars.registerHelper('collectionEmpty', function() {
	if (Images.find().count() == 0) {
		return true;
	} else {
		return false;
	}
	return true; //return empty true by default if something bad happens
});