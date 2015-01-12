var Parser = require('../common/Parser');
var HelpParser = require('./HelpParser');
var LabelParser = require('./LabelParser');
var AttribParser = require('../common/AttribParser');

/**
 * InputParser parsers a input control.
 *
 * {type:text, name:'text1'}
 *
 * @constructor
 */
function InputParser ()  {
	Parser.apply(this, arguments);
}

InputParser.prototype = Object.create(Parser.prototype);

InputParser.prototype.parse = function(name, directive) {

	var attributeParser = new AttribParser({label:1, help:1});
	var labelParser = new LabelParser();
	var helpParser = new HelpParser();

	var attributes;
	var label;
	var help;

	for(var key in directive)
	if(directive.hasOwnProperty((key))) {

		attributes = attributeParser.parse(key, directive[key]).toHtml();
		label = labelParser.parse(key, directive[key]).toHtml();
		help = helpParser.parse(key, directive[key]).toHtml();


	}


	this.html = '<div class="form-group">';
	this.html += label;
	this.html +='<div class="col-md-8">';
	this.html += '<input type="'+directive.type+'"'+attributes+' />';
	this.html += help;
	this.html += '</div></div>';

return this;

};

module.exports = InputParser;
