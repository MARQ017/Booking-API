'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings', [
      {
        user_id: 1,
        agent_id: 1,
        start_at: new Date(),
        finish_at: new Date(new Date().getTime() + 60 * 60 * 1000),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        agent_id: 2,
        start_at: new Date(),
        finish_at: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};