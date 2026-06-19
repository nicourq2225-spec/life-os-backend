'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Habitos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      diaCiclo: {
        type: Sequelize.INTEGER
      },
      fuerza: {
        type: Sequelize.BOOLEAN
      },
      nutricion: {
        type: Sequelize.BOOLEAN
      },
      abstinencia: {
        type: Sequelize.BOOLEAN
      },
      auditoria: {
        type: Sequelize.BOOLEAN
      },
      estudio: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Habitos');
  }
};