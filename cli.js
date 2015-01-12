#!/usr/bin/env node
'use strict';
var cluster = require('cluster');
var formboot = require('./');

var config = require("nomnom")
	.script("formboot")
	.options({
		parse: {
			required: true,
			abbr: 'p',
			metavar: 'FILE1,FILE2,..',
			help: "Config file with form directives to parse."
		},
		template: {
			abbr:'t',
			help: 'Specify the internal template style to use',
			default: 'bootstrap'
		}
	}).parse();

var paths = String(config.parse).split(',');
var html = new Array(paths.length);
var finished = 0;

if (cluster.isMaster) {

	var worker;

	for (var i = 0; i < paths.length; i++) {

		worker = cluster.fork({SOURCE_CODE: paths[i], ID: i});

		worker.on('message', function (msg) {

			html[msg.id] = msg.html;
			finished++;

			if (finished === paths.length) {
				console.log(html.join(''));
			}

		});
	}

	cluster.on('exit', function (worker, code) {

		if (code !== 0) {
			console.log('An error(s) occurred while trying to parse the form file(s)!');
			console.log('Please ensure you specified the correct path and there are no syntax errors.');

			for (var id in cluster.workers)
			if(cluster.workers.hasOwnProperty(id))
				cluster.workers[id].kill();

			process.exit();


		}
	});


} else {

	try {

		var forms = require(process.env.SOURCE_CODE);



	} catch (e) {
		console.log(e.message);
		process.exit(-1);

	}
	process.send({id: process.env.ID, html: formboot.parse(config.template, forms)});
	process.exit(0);

}

