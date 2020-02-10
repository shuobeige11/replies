
const Service = require('egg').Service;

class Category extends Service {
  /**
   * 分类列表
   */
  async find() {
    const { ctx } = this
    try {
      let data = await ctx.model.Category.findAll()
      if (data.length) {
        data = data.map(item => {
          return {
            code: item.wcbObjectId,
            name: item.wcbName,
            weblist: item.wcbSiteList,
            keystr: item.wcbKeyStr,
            switch: item.wcbSwitch
          }
        })
      }
      data = { code: 1, result: data }
      return data;
    } catch(err) {
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
  async edit(id, body) {
    const { ctx } = this
    if (await this.vaildate(ctx, body) == 0) {
      return {
        code: 0,
        result: '数据已存在，请重新输入'
      }
    }
    await ctx.model.Category.update({
      wcbName: body.name,
      wcbSiteList: body.weblist,
      wcbKeyStr: body.keystr,
      wcbSwitch: body.switch
    }, { where: { wcbObjectId: id }})
    const user = { code: 1, result: '' }
    return user;
  }

   /**
   * 新增分类
   * @body name (string) 名称
   * @body weblist (array) 爬虫有效结果列表（网站+内容）
   * @body keystr (string) 爬虫关键词
   * @body switch (enmu) 分类生效开关
   */
  async create(body) {
    const { ctx } = this
    if (body.switch == 1 && await this.vaildate(ctx, body) == 1) {
      return {
        code: 0,
        result: '当前存在运行中的类型'
      }
    }
    await ctx.model.Category.create({
      wcbName: body.name,
      wcbSiteList: body.weblist,
      wcbKeyStr: body.keystr,
      wcbSwitch: body.switch
    })
    const user = { code: 1, result: '' }
    return user;
  }

  /**
   * 删除分类
   * @params objectId (number) 唯一id
   */
  async delete(uid) {
    const { ctx } = this
    try {
      await ctx.model.Category.destroy({
        where: { wcbObjectId: uid }
      })
      const user = { code: 1, result: '' }
      return user;
    } catch(err) {
      throw err
    }
  }

  async vaildate (ctx, body) {
    let data = await ctx.model.Category.count({ where: {
      wcbSwitch: '1'
    }})
    if (data > 0 && !body.code) return 1
    return 2
  }
}

module.exports = Category;