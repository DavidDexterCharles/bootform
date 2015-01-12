var Parser = require('../common/Parser');

/**
 * LabelParser parses and provides a label block.
 * @constructor
 */
function LabelParser(options) {




}

LabelParser.prototype = Object.create(Parser.prototype);

LabelParser.prototype.parse = function (name, directive) {

	if(name !== 'label') {

		if(this.next)
		return this.next.parse(name, directive);

		return this;

	}


	var id = directive.id || '';
	var name = directive.label || '';

	this.html = '<label for"'+id+'" class="col-md-4 control-label">'+
		        name + '<label>';

	return this;

};



module.exports = LabelParser;
