'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, BIGINT, DATE, ENUM } = Sequelize;
    await queryInterface.createTable('wcb_website_types', {
      wcb_object_id: {
        type: BIGINT,
        primaryKey: true,
        allowNull: false,
        unique: 'objectid',
        autoIncrement: true
      },
      wcb_name: {
        type: STRING,
        defaultValue: '',
        allowNull: false
      },
      wcb_site_list: {
        type: STRING,
        defaultValue: '',
        allowNull: false
      },
      wcb_key_str: {
        type: STRING,
        defaultValue: '',
        allowNull: false
      },
      wcb_switch: {
        type: ENUM('0', '1') ,
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

    await queryInterface.dropTable('wcbWebSiteTypes');
  }
};
