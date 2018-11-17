module.exports = function (sequelize, DataTypes) {
	var Table = sequelize.define('Table', {
		user_name: DataTypes.STRING,
		user_balance: DataTypes.DECIMAL(10,2),
		goal_name: DataTypes.STRING,
<<<<<<< HEAD
		goal_upc: DataTypes.INTEGER,
		goal_price: DataTypes.INTEGER,
=======
		goal_upd: DataTypes.INTEGER,
		goal_price: DataTypes.DECIMAL(10,2),
>>>>>>> master
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		  },
		  updatedAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		  }
	});
	return Table;
};
