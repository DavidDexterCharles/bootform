var Parser = require('./Parser');

function AttribParser(exclude) {
	this.exclude = exclude || {};
	this.html = '';
}

AttribParser.prototype = Object.create(Parser.prototype);

AttribParser.prototype.parse = function (name, directive) {

	if (name in this.exclude) {
		if (this.next)
			return this.next.parse(name, directive);
		return this;
	}

	this.html += ' ' + name + '="' + directive + '"';

	return this;

};


module.exports = AttribParser;
