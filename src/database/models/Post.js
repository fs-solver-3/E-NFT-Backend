const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.InstagramUser, {
        foreignKey: 'instagramUserId',
        as: 'instagramUser',
        onDelete: 'CASCADE',
      });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
      source: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      likes: DataTypes.NUMBER,
      comments: DataTypes.NUMBER,
      instagramUserId: DataTypes.UUID,
      trending: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Post',
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

  return Post;
};
