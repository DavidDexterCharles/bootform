var must = require('must');
var bootform = require('../').getInstance();
var form = require('./form.json');

describe('bootform node module', function() {
	it('generate a form correctly', function() {

		bootform.parse(form).must.not.be.empty();


	});
});
