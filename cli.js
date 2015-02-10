#!/usr/bin/env node

'use strict';
var cluster = require('cluster');
var BootForm = require('./');

var config = require('nomnom')
	.script('bootform')
	.options({
		parse: {
			required: true,
			abbr: 'p',
			metavar: 'FILE1,FILE2,..',
			help: 'Config file with form directives to parse.'
		},
		template: {
			abbr: 't',
			help: 'Specify a path to the templates to use.',
			default: __dirname + '/default'
		}
	}).parse();

var paths = String(config.parse).split(',');
var html = new Array(paths.length);
var finished = 0;

function run(msg) {

	html[msg.id] = msg.html;
	finished++;

	if (finished === paths.length) {
		console.log(html.join(''));
	}

}

if (cluster.isMaster) {

	var worker;

	for (var i = 0; i < paths.length; i++) {

		worker = cluster.fork({
			SOURCE_CODE: paths[i],
			ID: i
		});

		worker.on('message', run);
	}

	cluster.on('exit', function(worker, code) {

		if (code !== 0) {
			for (var id in cluster.workers)
				if (cluster.workers.hasOwnProperty(id))
					cluster.workers[id].kill();

			process.exit();


		}
	});


} else {

	var bootform = BootForm.getInstance(config.template);

	try {

		var forms = require(require('path').resolve(process.env.SOURCE_CODE));

	} catch (e) {
		console.log(e.message);
		process.exit(-1);

	}

	process.send({
		id: process.env.ID,
		html: bootform.parse(forms)
	});

	process.exit(0);

}
