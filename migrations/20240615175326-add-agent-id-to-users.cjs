'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'agent_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Agents',
        key: 'id'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'agent_id');
  }
};
