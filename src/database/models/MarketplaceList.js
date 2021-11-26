const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MarketplaceList extends Model {
  }
  MarketplaceList.init(
    {
        nftId: DataTypes.STRING,
        imgUrl: DataTypes.STRING,
        seller_email: DataTypes.STRING,
        edition_num: DataTypes.INTEGER,
        expire_date: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: 'MarketplaceList',
        timestamps: false,
        freezeTableName: true,
        indexes: [
            {
            fields: ['seller_email'],
            },
        ],
    }
  );
  return MarketplaceList;
};