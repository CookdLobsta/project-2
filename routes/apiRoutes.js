var db = require('../models');

var total;



module.exports = function (app) {

	app.get("/api/get_balance/:id", function(req, res) {
		// findAll returns all entries for a table when used with no options
		db.Table.findOne({
		  where: {
			id: req.params.id
		  }
		}).then(function(user) {
		  // We have access to the todos as an argument inside of the callback function
		  console.log(user.dataValues);
		  res.json(user.dataValues);
		});
	}); 

	app.post('/money_manager_post', (req, res) => {
		db.Table.create(req.body).then(function(dbTable) {
			console.log(dbTable.dataValues.id)
			res.send('/money_manager?id=' + dbTable.dataValues.id); 
		})
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

	app.put('/money_manager_put', function (req, res) {
		// console.log("in put function")
		// console.log("body here ", req.body);
		console.log("body",req.body)
		let idNumber = req.body.idNumber
		db.Table.update({
			user_balance: req.body.user_balance 
		},
			{
				where: { id: idNumber }
			}).then(function (dbTable) {
				res.json(dbTable);
			});
		res.send('/money_manager?id=' + idNumber);
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
