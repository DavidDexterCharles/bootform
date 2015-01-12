var Parsers = require('../common/Parsers');
var Parser = require('../common/Parser');

function FormParser ()  {
	Parser.apply(this, arguments);

}

FormParser.prototype = Object.create(Parser.prototype);

FormParser.prototype.parse = function(name, directive) {

	var attributes = Parsers.createAttribParser({controls:1});

	attributes.parse(name, directive);

	this.html += attributes.toHtml();

	if(this.next)
	 this.next.parse(name, directive);

	return this;

};

FormParser.prototype.toHtml = function() {

	var embed;

	if(this.next)
	embed = this.next.toHtml();

	return '<form '+this.html+'>'+
			embed+'</form>';

};

module.exports = FormParser;
