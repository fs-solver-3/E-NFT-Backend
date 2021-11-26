const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class NFT extends Model {
    static associate(models) {
      NFT.belongsTo(models.User, {
        foreignKey: 'ownerId',
        as: 'owner',
        onDelete: 'CASCADE',
      });
      NFT.belongsTo(models.User, {
        foreignKey: 'creatorId',
        as: 'creator',
        onDelete: 'CASCADE',
      });
      NFT.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post',
        onDelete: 'CASCADE',
      });
    }
	}
	NFT.init(
		{
			ownerId: DataTypes.UUID,
			creatorId: DataTypes.UUID,
      postId: DataTypes.UUID,
      price: DataTypes.NUMBER,
      transactionHash: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'NFT',
			paranoid: true,
			timestamp: true,
			indexes: [
				{
					unique: true,
					fields: ['url'],
					where: {
						deletedAt: null,
					},
				},
			],
			hooks: {},
		}
	);

	return NFT;
};
