module.exports = (sequelize, Sequelize) => {
	const attachment = sequelize.define("attachment", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		data_entry_personel_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
	name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
        description:{
			type: Sequelize.TEXT,
			allowNull: false,
		},
        uid: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		active: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
		},
	});

	return attachment;
};

