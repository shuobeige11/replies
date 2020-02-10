'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, BIGINT, DATE, INTEGER } = Sequelize;
    await queryInterface.createTable('wcb_settings', {
      wcb_object_id: {
        type: BIGINT,
        primaryKey: true,
        allowNull: false,
        unique: 'object_id',
        autoIncrement: true
      },
      wcb_server_address: {
        type: STRING,
        defaultValue: '',
        allowNull: false
      },
      wcb_server_ports: {
        type: INTEGER,
        allowNull: false
      },
      wcb_mail_from: {
        type: STRING,
        defaultValue: '',
        allowNull: false
      },
      wcb_auth_pass: {
        type: STRING,
        defaultValue: '',
        allowNull: true
      },
      wcb_mail_to: {
        type: STRING,
        defaultValue: '',
        allowNull: false
      },
      created_at: DATE,
      updated_at: DATE,
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    await queryInterface.dropTable('wcbSetting');
  }
};
