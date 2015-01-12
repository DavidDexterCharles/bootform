var AttribParser = require('../common/AttribParser');

function ControlAttribParser ()  {
	AttribParser.apply(this, arguments);
}

FormAttribParser.prototype = Object.create(AttribParser.prototype);

FormAttribParser.prototype.toHtml = function() {

	return '<input '+this.html+'>'+
			this.next.toHtml() + '</form>';

};

module.exports = FormAttribParser;
