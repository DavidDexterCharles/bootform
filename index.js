var Parsers = require('./lib/form/Parsers');

/**
 * @module formboot
 * The main formboot module.
 *
 */
module.exports = {

	/**
	 * parse a form object and return the resulting html.
	 * @param {String} tmpls
	 * @param {Hash} form
	 * @returns {string}
	 */
	parse: function(tmpls, form) {

		var parsers = Parsers.createForForm(Parsers.getFactory(tmpls));

		for(var key in form)
		if(form.hasOwnProperty(key))
		parsers.parse(key, form[key]);

		return parsers.toHtml();

	}

};

