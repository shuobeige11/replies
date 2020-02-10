module.exports = app => {
  const { STRING, DATE, BIGINT, ENUM } = app.Sequelize
  return app.model.define('wcbWebsiteType', {
    wcbObjectId: {
      type: BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    wcbName: {
      type: STRING,
      defaultValue: '',
      allowNull: false
    },
    wcbSiteList: {
      type: STRING,
      defaultValue: '',
      allowNull: false
    },
    wcbKeyStr: {
      type: STRING,
      defaultValue: '',
      allowNull: false
    },
    wcbSwitch: {
      type: ENUM('0', '1') ,
      allowNull: false
    },
    createdAt: DATE,
    updatedAt: DATE
  })
}