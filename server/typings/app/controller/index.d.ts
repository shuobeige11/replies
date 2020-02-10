// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiCategory = require('../../../app/controller/api/category');
import ExportApiSetting = require('../../../app/controller/api/setting');
import ExportApiWebsite = require('../../../app/controller/api/website');

declare module 'egg' {
  interface IController {
    api: {
      category: ExportApiCategory;
      setting: ExportApiSetting;
      website: ExportApiWebsite;
    }
  }
}
