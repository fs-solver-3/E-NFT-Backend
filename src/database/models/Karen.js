const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Karen extends Model {
  }
  Karen.init(
    {
      owner: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      currencytype: DataTypes.STRING,
      email: DataTypes.STRING,
      karentype: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Karen',
      timestamps: false,
      freezeTableName: true,
      indexes: [
        {
          fields: ['onwer'],
        },
      ],
    }
  );
  return Karen;
};