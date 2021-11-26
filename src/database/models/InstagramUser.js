const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class InstagramUser extends Model {
	}
	InstagramUser.init(
		{
			username: DataTypes.STRING,
			fullName: DataTypes.STRING,
			avatar: DataTypes.STRING,
			bio: DataTypes.STRING,
			followings: DataTypes.NUMBER,
			follows: DataTypes.NUMBER,
			posts: DataTypes.NUMBER
		},
		{
			sequelize,
			modelName: 'InstagramUser',
			paranoid: true,
			timestamp: true,
			indexes: [
				{
					unique: true,
					fields: ['userId'],
					where: {
						deletedAt: null,
					},
				},
			],
			hooks: {},
		}
	);

	return InstagramUser;
};
