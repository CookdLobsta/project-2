var db = require('../models');

var total;



module.exports = function (app) {
	// Get all examples
	// app.get('/api/examples', function (req, res) {
	// 	db.Example.findAll({}).then(function (dbExamples) {
	// 		res.json(dbExamples);
	// 	});
	// });

	// app.get("/money_manager", function(req, res) {
	// 	// replace old function with sequelize function
	// 	db.Table.findAll()
	// 		// use promise method to pass the burgers...
	// 		.then(function(dbTable) {
	// 			// into the main index, updating the page
	// 			var hbsObject = { user: dbTable };
	// 			console.log("dbTable",dbTable)
	// 				return res.render("money_manager", hbsObject);
	// 		});
	// });

	// Temp
	app.post('/money_manager_post', (req, res) => {
		db.Table.create(req.body).then(function(dbTable) {
			res.json(dbTable);
		})
		res.send('/money_manager');
	})

	// add user_balance
	app.post('/money_manager_money', (req, res) => {
		console.log("in post func");
		db.Table.create(req.body).then(function (dbTable) {
			res.json(dbTable);
		})
		res.send('/money_manager');
	})

	app.put('/money_manager_put', function (req, res) {
		// console.log("in put function")
		// console.log("body here ", req.body);
		db.Table.update(
			{ user_balance: req.body.user_balance },
			{
				where: { id: idNumber }
			}).then(function (dbTable) {
				res.json(dbTable);
			});
		res.send('/money_manager');
	});

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
