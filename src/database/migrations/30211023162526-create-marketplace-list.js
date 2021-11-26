'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MarketplaceList', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nftId: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      imgUrl: {
        allowNull: true,
        type: Sequelize.STRING
      },
      seller_email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      edition_num: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      expire_date: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      } 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MarketplaceList');
  }
};