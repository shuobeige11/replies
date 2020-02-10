'use strict';

const Controller = require('egg').Controller;

const validateJson = {
  name: 'string',
  weblist: 'string',
  keystr: 'string'
}
class apiCategory extends Controller {
  /**
   * 分类列表
   */
  async index () {
    const { ctx } = this
    try {
      let data = await ctx.service.category.find()
      ctx.body = data
    } catch(err) {
      ctx.body = err
      throw err
    }
  }

  /**
   * 修改分类
   * @params objectId (number) 唯一id
   * @body name (string) 名称
   * @body weblist (array) 爬虫有效结果列表（网站+内容）
   * @body keystr (string) 爬虫关键词
   * @body switch (enmu) 分类生效开关
   */
  async update() {
    const { ctx } = this;
    try {
      ctx.validate(validateJson, ctx.request.body);
      let path = ctx.request.url
      let ids = path.split('/')
      ids = ids && ids[ids.length - 1]
      let data = await ctx.service.category.edit(ids, ctx.request.body)
      ctx.body = data;
    } catch(err) {
      ctx.body = err
      throw err
    }
  }

  /**
   * 新增分类
   * @body name (string) 名称
   * @body weblist (array) 爬虫有效结果列表（网站+内容）
   * @body keystr (string) 爬虫关键词
   * @body switch (enmu) 分类生效开关
   */
  async create() {
    const { ctx } = this;
    try {
      ctx.validate(validateJson, ctx.request.body);
      let data = await ctx.service.category.create(ctx.request.body)
      ctx.body = data;
    } catch(err) {
      ctx.body = err
      throw err
    }
  }
  
  /**
   * 删除分类
   * @params objectId (number) 唯一id
   */
  async destroy() {
    const { ctx } = this;
    try {
      let path = ctx.request.url
      let ids = path.split('/')
      ids = ids && ids[ids.length - 1]
      let data = await ctx.service.category.delete(ids)
      ctx.body = data;
    } catch(err) {
      ctx.body = err
      throw err
    }
  }
}

module.exports = apiCategory
