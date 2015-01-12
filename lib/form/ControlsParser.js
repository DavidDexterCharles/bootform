var Parser = require('./../common/Parser');
var InvalidBlockError = require('./../common/InvalidBlockError');

/**
 * ControlsParser provides a Parser that parsers the controls section.
 *
 * When this parser's turns comes up we are looking at this:
 *
 * controls:[{type:text, name:'text1'},{type:text, name:'text2'}]
 *
 * Each object in this array will be processed and turned into a form
 * control by ControlParser.parse().
 * @param {ParserFactory} factory
 * @constructor
 */
function ControlsParser(factory) {

	this.parsers = factory;

}

ControlsParser.prototype = Object.create(Parser.prototype);

ControlsParser.prototype.parse = function (name, directive) {


	if (name !== 'controls') {
		if(this.next)
		this.next.parse(name, directive);
		return this;
	}


	if (!Array.isArray(directive))
		throw new InvalidBlockError('The \'controls\' block must be an array!');

	var parser;

	directive.forEach(function (data) {

		parser = this.parsers.createFromType(data.type);
		parser.parse(null, data);

		this.html += parser.toHtml();

	}.bind(this));


};

module.exports = ControlsParser;
