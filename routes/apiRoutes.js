var db = require('../models');


module.exports = function (app) {
	// Get all examples
	// app.get('/api/examples', function (req, res) {
	// 	db.Example.findAll({}).then(function (dbExamples) {
	// 		res.json(dbExamples);
	// 	});
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
	db.Table.create(req.body).then(function(dbTable) {
		res.json(dbTable);
	})
	res.send('/money_manager');
})

app.put('/money_manager_post', function(req, res) {
    db.Table.update(
      {
        where: {
		  id: req.body.id,
		  user_balance: total
        }
      }).then(function(dbTable) {
      res.json(dbTable);
    });
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
