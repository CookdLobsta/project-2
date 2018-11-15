var db = require('../models');


module.exports = function (app) {
	// Get all examples
	app.get('/api/examples', function (req, res) {
		db.Example.findAll({}).then(function (dbExamples) {
			res.json(dbExamples);
		});
	});

	// Temp
	app.post('/money_manager_post', (req, res) => {
		res.send('/money_manager');
	})

	// End Temp

	// Create a new example
	app.post('/api/name', function (req, res) {
		console.log(req.body);
		db.Table.create(req.body.user_name).then(function (dbExample) {
			res.json(dbExample);
		});
	});

	// Delete an example by id
	app.delete('/api/examples/:id', function (req, res) {
		db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
			res.json(dbExample);
		});
	});
};
