const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      Contact.belongsTo(models.User, {
        foreignKey: 'email',
        targetKey: 'email',
        as: 'sender',
      });
    }
  }
  Contact.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Contact',
      paranoid: true,
      timestamp: true,
      hooks: {},
    }
  );

  return Contact;
};
