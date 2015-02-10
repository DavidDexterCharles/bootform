var format = require('string-template');

module.exports = {

	reserved: {
		type: 1,
                options: 1,
                label:1,
		class: 1
	},
	special: {
		id: 1,
                class: 1,
                label:1

	},
	getAttributes: function(form) {

		var attribs = [];

		for (var key in form)
			if (form.hasOwnProperty(key))
				if (!(key in this.reserved))
					attribs.push(format('{key}="{value}"', {
						key: key,
						value: form[key]
					}));

		return attribs.join(' ');

	},
	getLocals: function(form) {

		var locals = {};

		for (var key in form)
			if (form.hasOwnProperty(key))
				if ((key in this.reserved) || (key in this.special))
					locals[key] = form[key];

		return locals;

	}
};
