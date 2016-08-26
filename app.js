'use strict';
{
	var port = () => {
		return 80 // (process.argv.length > 2) ? process.argv[2] : 3000
	}()

	var express = require('express')
		, app = express()

	app.use('/csci5408', require('go-graph-presentation'))
	app.use('/csci7551', require('csci7551-course-website'))
	app.use('/', (req, res, next) => {
		res.sendFile(__dirname + '/public/html/index.html', (err) => {
			if (err) next(err)
		})
	})
	app.use((err, req, res, next) => {
		res.status(500).send(err.stack)
	})
	app.listen(port, () => {
		console.log('listening on port ' + port)
	})
}