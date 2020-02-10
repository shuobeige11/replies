module.exports = app => {
  const { STRING, DATE, BIGINT } = app.Sequelize;
  const WcbWebSiteList = app.model.define('wcbWebsiteList', {
    wcbObjectId: {
      type: BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    wcbWebSite: {
      type: STRING,
      defaultValue: '',
      allowNull: false
    },
    createdAt: DATE,
    updatedAt: DATE
  })
  return WcbWebSiteList
}