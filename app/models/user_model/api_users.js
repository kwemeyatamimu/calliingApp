module.exports = (sequelize, Sequelize) => {
	const api_users = sequelize.define("api_users", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		access_name: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		organization: {
			type: Sequelize.TEXT,
			allowNull: false,
		},

		system: {
			type: Sequelize.TEXT,
			allowNull: false,
			unique: true,
		},

		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},

		active: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
		},
	});

	return api_users;
};
