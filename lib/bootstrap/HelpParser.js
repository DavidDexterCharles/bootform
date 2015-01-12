var Parser = require('../common/Parser');

/**
 * HelpParser parses and provides a help block.
 * @constructor
 */
function HelpParser(options) {
}

HelpParser.prototype = Object.create(Parser.prototype);

HelpParser.prototype.parse = function (name, directive) {

	if(name !== 'help') {

		if(this.next)
			return this.next.parse(name, directive);

		return this;

	}
	var help = directive.help || '';
	this.html = '<p class="help-block">'+help+'</p>';

	return this;

};



module.exports = HelpParser;
