'use strict';

const Controller = require('egg').Controller;

class apiWebSite extends Controller {
  /**
   * 网站列表
   */
  async index () {
    const { ctx } = this
    try {
      let data = await ctx.service.website.find()
      ctx.body = data
    } catch(err) {
      ctx.body = err
      throw err
    }
  }

  /**
   * 新增分类
   * @body url (string) 名称
   */
  async create() {
    const { ctx } = this;
    try {
      ctx.validate({
        url: 'string'
      }, ctx.request.body);
      let data = await ctx.service.website.create(ctx.request.body)
      ctx.body = data;
    } catch(err) {
      ctx.body = err
      throw err
    }
  }

  /**
   * 删除分类
   * @params websiteId (number) 唯一id
   */
  async destroy() {
    const { ctx } = this;
    try {
      let path = ctx.request.url
      let ids = path.split('/')
      ids = ids && ids[ids.length - 1]
      let data = await ctx.service.website.delete(ids)
      ctx.body = data;
    } catch(err) {
      ctx.body = err
      throw err
    }
  }
}

module.exports = apiWebSite