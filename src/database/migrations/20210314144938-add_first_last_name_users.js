module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'fullName', 'firstName');
    await queryInterface.addColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Users', 'lastName');
    await queryInterface.renameColumn('Users', 'firstName', 'fullName');
    await queryInterface.removeColumn('Users', 'username');
  },
};
