const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Offer extends Model {
    static associate(models) {
      Offer.belongsTo(models.User, {
        foreignKey: 'buyerId',
        as: 'buyer',
        onDelete: 'CASCADE',
      });
      Offer.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post',
        onDelete: 'CASCADE',
      });
    }
	}
	Offer.init(
		{
      price: DataTypes.FLOAT,
      auctionId: DataTypes.UUID,
      buyerId: DataTypes.UUID,
			postId: DataTypes.UUID,
      status: DataTypes.STRING,
			transactionHash: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Offer',
			paranoid: true,
			timestamp: true,
			indexes: [
				{
					unique: true,
					fields: ['createdAt'],
					where: {
						deletedAt: null,
					},
				},
			],
			hooks: {},
		}
	);

	return Offer;
};
