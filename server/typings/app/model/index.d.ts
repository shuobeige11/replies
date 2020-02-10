// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory = require('../../../app/model/category');
import ExportSetting = require('../../../app/model/setting');
import ExportWebsite = require('../../../app/model/website');

declare module 'egg' {
  interface IModel {
    Category: ReturnType<typeof ExportCategory>;
    Setting: ReturnType<typeof ExportSetting>;
    Website: ReturnType<typeof ExportWebsite>;
  }
}
