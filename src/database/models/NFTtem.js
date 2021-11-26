const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NFTitem extends Model {
  }
  NFTitem.init(
    {
      owner: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      currencytype: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'NFTitem',
      timestamps: false,
      freezeTableName: true,
      indexes: [
        {
          fields: ['onwer'],
        },
      ],
    }
  );
  return NFTitem;
};