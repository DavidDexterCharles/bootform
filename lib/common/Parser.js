/**
 * Parser is the base prototype of all Parsers.
 * @param {Parsers} A factorty object for creating sub parsers.
 * @constructor
 * @abstract
 */
function Parser(factory) {

	this.parsers = factory;
	this.html = '';

}

/**
 * setNext sets the next parser in this chain
 * @param {Parser} next
 */
Parser.prototype.setNext = function (next) {
	this.next = next;
};


Parser.prototype.parse = function(name, hash) {

	return this;

};

Parser.prototype.toHtml = function () {

	if(!this.html)
	return '';

	return this.html;

};

module.exports = Parser;
