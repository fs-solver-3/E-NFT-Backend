const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Auction extends Model {
    static associate(models) {
      Auction.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post',
        onDelete: 'CASCADE',
      });
      Auction.belongsTo(models.User, {
        foreignKey: 'winnerId',
        as: 'winner',
        onDelete: 'CASCADE',
      });
      Auction.hasMany(models.Offer, {
        foreignKey: 'auctionId',
        as: 'offers',
        onDelete: 'CASCADE',
      })
    }
	}
	Auction.init(
		{
      postId: DataTypes.UUID,
      isFinished: DataTypes.BOOLEAN,
      winnerId: DataTypes.UUID,
      winnerPrice: DataTypes.FLOAT,
      transactionHash: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
		},
		{
			sequelize,
			modelName: 'Auction',
			paranoid: true,
			timestamp: true,
			indexes: [
				{
					unique: true,
					fields: [],
					where: {
						deletedAt: null,
					},
				},
			],
			hooks: {},
		}
	);

	return Auction;
};
