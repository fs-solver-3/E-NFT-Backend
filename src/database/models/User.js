// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
// 	class User extends Model {
// 		static associate(models) {
//       User.belongsTo(models.InstagramUser, {
//         foreignKey: 'instagramUserId',
//         as: 'instagramUser',
//         onDelete: 'CASCADE',
//       });
//     }
// 	}
// 	User.init(
// 		{
// 			fullName: DataTypes.STRING,
// 			username: {
// 				type: DataTypes.STRING,
// 				allowNull: false,
// 			},
// 			email: DataTypes.STRING,
// 			encryptedPassword: DataTypes.STRING(1000),
// 			instagramUserId: DataTypes.UUID,
// 		},
// 		{
// 			sequelize,
// 			modelName: 'User',
// 			paranoid: true,
// 			timestamp: true,
// 			indexes: [
// 				{
// 					unique: true,
// 					fields: ['email', 'phone'],
// 					where: {
// 						deletedAt: null,
// 					},
// 				},
// 			],
// 			hooks: {},
// 		}
// 	);

// 	return User;
// };


const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.RefreshToken, {
        foreignKey: "userId",
        as: "refreshTokens",
        onDelete: "CASCADE"
      });
    }
  }
  User.init(
    {
      wallet_addr: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      publicName: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: false,
      freezeTableName: true,
      indexes: [
        {
          fields: ['wallet_addr'],
        },
      ],
    }
  );
  return User;
};