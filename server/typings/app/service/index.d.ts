// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory = require('../../../app/service/category');
import ExportRequest = require('../../../app/service/request');
import ExportSend = require('../../../app/service/send');
import ExportSetting = require('../../../app/service/setting');
import ExportWebsite = require('../../../app/service/website');

declare module 'egg' {
  interface IService {
    category: ExportCategory;
    request: ExportRequest;
    send: ExportSend;
    setting: ExportSetting;
    website: ExportWebsite;
  }
}
