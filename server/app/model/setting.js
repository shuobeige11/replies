module.exports = app => {
    const { STRING, DATE, BIGINT, INTEGER } = app.Sequelize
    return app.model.define('wcbSetting', {
      wcbObjectId: {
        type: BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      wcbServerAddress: {
        type: STRING,
        defaultValue: '',
        allowNull: false
      },
      wcbServerPorts: {
        type: INTEGER,
        allowNull: false
      },
      wcbMailFrom: {
        type: STRING,
        defaultValue: '',
        allowNull: false
      },
      wcbAuthPass: {
        type: STRING,
        defaultValue: '',
        allowNull: true
      },
      wcbMailTo: {
        type: INTEGER,
        allowNull: false
      },
      createdAt: DATE,
      updatedAt: DATE
    })
  }