'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  onerror: {
    errorPageUrl: (err, ctx) => ctx.errorPageUrl || '/500'
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }
};
