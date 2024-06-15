'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    await queryInterface.bulkInsert('Agents', [
      {
        name: 'Agent 1',
        email: 'agent1@abc.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Agent 2',
        email: 'agent2@abc.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Agents', null, {});
  }
};
