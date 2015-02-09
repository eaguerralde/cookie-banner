/* License: MIT.
 * Copyright (C) 2014, Uri Shaked.
 */

'use strict';

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		//karma: {
		//	unit: {
		//		configFile: 'karma.conf.js',
		//		singleRun: true
		//	}
		//},
		//jshint: {
		//	options: {
		//		jshintrc: '.jshintrc'
		//	},
		//	all: [
		//		'Gruntfile.js',
		//		'angular-load.js',
		//		'tests.js'
		//	]
		//},
		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'dist/cookiebanner.min.js': 'src/cookiebanner.js'
				}
			},
			dist2: {
				// The files to concatenate:
				// Notice the wildcard, which is automatically expanded.
				options: {
					sourceMap: false,
					beautify: true,
					mangle: false,
					compress: false
				},
				src: ['src/*.js'],
				// The destination file:
				// Notice the angle-bracketed ERB-like templating,
				// which allows you to reference other properties.
				// This is equivalent to 'dist/main.js'.
				dest: 'dist/cookiebanner.js'
				// You can reference any grunt config property you want.
				// Ex: '<%= concat.options.separator %>' instead of ';'
			}
		}
	});

	//grunt.registerTask('test', [
	//	'jshint',
	//	'karma'
	//]);

	grunt.registerTask('build', [
		//'jshint',
		'uglify'
	]);

	grunt.registerTask('default', ['build']);
};
