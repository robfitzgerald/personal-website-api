'use strict';
{
	var express = require('express')
		, router = express.Router()
		, path = require('path')

	router
		.use('/csci5408', require('go-graph-presentation'))
		.use('/csci7551', require('csci7551-course-website'))
		.use('/csci5593', require('csci5593-course-website'))
		.use('/', (req, res, next) => {
			res.sendFile(path.dirname(__dirname) + '/public/html/ucd.html', (err) => {
				if (err) next(err)
			})
		})

	module.exports = router
}