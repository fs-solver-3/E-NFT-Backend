module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'lastName');
    await queryInterface.renameColumn('Users', 'firstName', 'fullName');
  },

  down: async (queryInterface) => {
    await queryInterface.renameColumn('Users', 'fullName', 'firstName');
    await queryInterface.addColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
