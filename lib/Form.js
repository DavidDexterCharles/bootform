var format = require('string-template');

module.exports = {

	getAttributes: function(form) {

		var attribs = [];

		for (var key in form)
			if (form.hasOwnProperty(key))
				if (key !== 'controls')
					attribs.push(format('{key}="{value}"', {
						key: key,
						value: form[key]
					}));

		return attribs.join(' ');

	},

	getControls: function(form) {
		return form.controls;
	}


};
