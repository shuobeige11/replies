const Service = require('egg').Service;
class WebSite extends Service {
  /**
   * 网站列表
   */
  async find() {
    const { ctx } = this
    try {
      let data = await ctx.model.Website.findAll()
      if (data.length) {
        data = data.map(item => { return {
          code: item.wcbObjectId,
          name: item.wcbWebSite
        }})
      }
      data = { code: 1, result: data }
      return data;
    } catch(err) {
      throw err
    }
  }

  /**
   * 新增分类
   * @body url (string) 网址
   */
  async create(body) {
    const { ctx } = this
    try {
      let data = await ctx.model.Website.findOne({ where: {
        wcbWebSite: body.url
      }})
      if (data) {
        return {
          code: 0,
          result: '数据已存在，请重新输入'
        }
      }
      await ctx.model.Website.create({
        wcbWebSite: body.url 
      })
      const user = { code: 1, result: '' }
      return user;
    } catch(err) {
      throw err
    }
  }

  /**
   * 删除分类
   * @params wcbObjectId (number) 唯一id
   */
  async delete(uid) {
    const { ctx } = this
    try {
      await ctx.model.Website.destroy({
        where: { wcbObjectId: uid }
      })
      const user = { code: 1, result: '' }
      return user;
    } catch(err) {
      throw err
    }
  }
}


module.exports = WebSite;