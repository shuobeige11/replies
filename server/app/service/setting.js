const Service = require('egg').Service;

class Setting extends Service {
  /**
   * 分类列表
   */
  async find() {
    const { ctx } = this
    let data = await ctx.model.Setting.findAll()
    if (data.length) {
      data = data.map(item => {
        return {
          code: item.wcbObjectId,
          server: item.wcbServerAddress,
          ports: item.wcbServerPorts,
          mailfrom: item.wcbMailFrom,
          authpass: item.wcbAuthPass,
          mailto: item.wcbMailTo
        }
      })
    }
    data = { code: 1, result: data }
    return data;
  }

   /**
   * 新增个人信息
   * @body server (string) 邮箱服务器地址
   * @body ports (number) 邮箱服务器端口
   * @body mailto (array) 接收方邮箱
   * @body mailfrom (string) 发送方邮箱
   * @body authpass (string) 授权码
   * 
   */
  async create(body) {
    const { ctx } = this
    let data = await ctx.model.Setting.findAll()
    if (data && data.length > 0) {
      console.log(1)
      await ctx.model.Setting.update({
        wcbServerAddress: body.server,
        wcbServerPorts: body.ports,
        wcbMailFrom: body.mailfrom,
        wcbAuthPass: body.authpass,
        wcbMailTo: body.mailto
      }, { where: {
        wcbObjectId: body.code
      }})
      return { code: 1, result: '' }
    }
    await ctx.model.Setting.create({
      wcbServerAddress: body.server,
      wcbServerPorts: body.ports,
      wcbMailFrom: body.mailfrom,
      wcbAuthPass: body.authpass,
      wcbMailTo: body.mailto
    })
    return { code: 1, result: '' };
  }
}

module.exports = Setting;