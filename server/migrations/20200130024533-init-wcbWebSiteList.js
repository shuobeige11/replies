'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, BIGINT, DATE } = Sequelize;
    await queryInterface.createTable('wcb_website_lists', {
      wcb_object_id: {
        type: BIGINT,
        primaryKey: true,
        allowNull: false,
        unique: 'objectid',
        autoIncrement: true
      },
      wcb_web_site: {
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

    await queryInterface.dropTable('wcbWebSiteList');
  }
};
