'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.resources('category', '/api/category', controller.api.category)
  router.resources('website', '/api/website', controller.api.website)
  router.resources('setting', '/api/setting', controller.api.setting)
};
