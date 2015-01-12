var FormParser = require('./FormParser');
var ControlsParser =  require('./ControlsParser');
var BootstrapParsers = require('./../bootstrap/BootStrapParsers');

module.exports = {

	createForForm: function(factory) {

		var parsers = new FormParser();
		parsers.setNext(new ControlsParser(factory));
		return parsers;

	},
	createAttribParser: function (exclude) {

		return new AttribParser(exclude);


	},
	getFactory: function(style) {

		return BootstrapParsers;

	}

};
