const send = require('../service/send').send
const request = require('../service/request').request
module.exports = app => {
  return {
    schedule: {
      interval: 30 * 1000 * 60,
      type: 'all',
    },
    async task(ctx) {
      let Config = await ctx.model.Setting.findAll()
      if (Config.length) {
        Config = Config[0]
        send(Config, ctx)
      }
    }
  };
};