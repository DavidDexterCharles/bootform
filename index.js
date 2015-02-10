var EOL = require('os').EOL;
var Controls = require('./lib/Controls');
var Form = require('./lib/Form');
var nunjucks = require('nunjucks');

function BootForm(env) {
	this.env = env;
}

BootForm.getInstance = function(path) {

	path = path || __dirname + '/default';
	return new BootForm(nunjucks.configure(path));

};


/**
 * parse json and generate the resulting html.
 *
 * @param {Object} form
 * @return {String}
 *
 */
BootForm.prototype.parse = function(form) {

	var attribs = Form.getAttributes(form);
	var controls = Form.getControls(form);

	var html = controls.map(function(control) {

		try {

			return this.env.render(control.type + '.html', {
				attributes: Controls.getAttributes(control),
				control: Controls.getLocals(control)
			});
		} catch (err) {

			return '<!-- ' + err + ' -->';

		}

	}.bind(this)).join(EOL);

	return this.env.render('form.html', {
		html: html,
		attributes: Form.getAttributes(form)
	});



};

module.exports = BootForm;
