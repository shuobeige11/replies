'use strict';

const Controller = require('egg').Controller;

const validateJson = {
  server: 'string',
  ports: 'string',
  mailfrom: 'string'
}
class apiSetting extends Controller {
   /**
   * 系统个人信息设置
   */
  async index () {
    const { ctx } = this
    try {
      let data = await ctx.service.setting.find()
      ctx.body = data
    } catch(err) {
      ctx.body = err
      throw err
    }
  }

/**
   * 新增个人信息
   * @body server (string) 邮箱服务器地址
   * @body ports (number) 邮箱服务器端口
   * @body mailto (array) 接收方邮箱
   * @body mailfrom (string) 发送方邮箱
   * @body authpass (string) 授权码
   */
  async create() {
    const { ctx } = this;
    try {
      ctx.validate(validateJson, ctx.request.body);
      let data = await ctx.service.setting.create(ctx.request.body)
      ctx.body = data;
    } catch(err) {
      ctx.body = err
      throw err
    }
  }

}


module.exports = apiSetting