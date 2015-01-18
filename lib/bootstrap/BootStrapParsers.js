var HelpParser = require('./HelpParser');
var LabelParser = require('./LabelParser');
var AttribParser = require('../common/AttribParser');

module.exports = {

	types: {

		text: require('./InputParser'),
		number: require('./InputParser'),
		email: require('./InputParser'),
		date: require('./InputParser'),

	},
	createFromType: function(type) {

		if (!(type in this.types))
			type = 'text';

		return new this.types[type]();


	},
	createAttribParser: function(exclude) {

		return new AttribParser(exclude);


	},
	createLabelParser: function() {

		return new LabelParser();

	},
	createHelpParser: function() {

		return new HelpParser();

	}


};
