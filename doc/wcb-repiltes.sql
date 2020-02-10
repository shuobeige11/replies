/*
 Navicat MySQL Data Transfer

 Source Server         : wcb-replies
 Source Server Version : 50723
 Source Host           : localhost
 Source Database       : wcb-repiltes

 Target Server Version : 50723
 File Encoding         : utf-8

 Date: 02/09/2020 11:43:46 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `SequelizeMeta`
-- ----------------------------
DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
--  Records of `SequelizeMeta`
-- ----------------------------
BEGIN;
INSERT INTO `SequelizeMeta` VALUES ('20200130022955-init-wcbWebSiteTypes.js'), ('20200130024533-init-wcbWebSiteList.js'), ('20200130024717-init-wcbSetting.js');
COMMIT;

-- ----------------------------
--  Table structure for `wcb_settings`
-- ----------------------------
DROP TABLE IF EXISTS `wcb_settings`;
CREATE TABLE `wcb_settings` (
  `wcb_object_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `wcb_server_address` varchar(255) NOT NULL DEFAULT '',
  `wcb_server_ports` int(11) NOT NULL,
  `wcb_mail_from` varchar(255) NOT NULL DEFAULT '',
  `wcb_auth_pass` varchar(255) DEFAULT '',
  `wcb_mail_to` varchar(255) NOT NULL DEFAULT '',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`wcb_object_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `wcb_settings`
-- ----------------------------
BEGIN;
INSERT INTO `wcb_settings` VALUES ('3', 'smtp.qq.com', '465', '982254371@qq.com', 'dledetiyvznubdjb', '982254371@qq.com,shuobeige@163.com,21520275@qq.com,173464001@qq.com', '2020-02-09 10:53:52', '2020-02-09 11:03:31');
COMMIT;

-- ----------------------------
--  Table structure for `wcb_website_lists`
-- ----------------------------
DROP TABLE IF EXISTS `wcb_website_lists`;
CREATE TABLE `wcb_website_lists` (
  `wcb_object_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `wcb_web_site` varchar(255) NOT NULL DEFAULT '',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`wcb_object_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `wcb_website_lists`
-- ----------------------------
BEGIN;
INSERT INTO `wcb_website_lists` VALUES ('1', 'http://www.ls114.cn/forum-69-1.html', '2020-02-08 21:53:46', '2020-02-08 21:53:46'), ('2', 'http://www.ls114.cn/forum-17-1.html', '2020-02-08 21:56:13', '2020-02-08 21:56:13'), ('3', 'http://sports.jschina.com.cn/', '2020-02-09 11:05:54', '2020-02-09 11:05:54'), ('4', 'http://zrzy.jiangsu.gov.cn/njls/', '2020-02-09 11:27:32', '2020-02-09 11:27:32');
COMMIT;

-- ----------------------------
--  Table structure for `wcb_website_types`
-- ----------------------------
DROP TABLE IF EXISTS `wcb_website_types`;
CREATE TABLE `wcb_website_types` (
  `wcb_object_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `wcb_name` varchar(255) CHARACTER SET utf8mb4 NOT NULL DEFAULT '',
  `wcb_site_list` varchar(5000) CHARACTER SET utf8mb4 NOT NULL DEFAULT '',
  `wcb_key_str` varchar(255) CHARACTER SET utf8mb4 NOT NULL DEFAULT '',
  `wcb_switch` enum('0','1') NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`wcb_object_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `wcb_website_types`
-- ----------------------------
BEGIN;
INSERT INTO `wcb_website_types` VALUES ('1', '溧水长跑', '[{\"desc\":\"\",\"url\":\"http://www.ls114.cn/forum-17-1.html\"},{\"desc\":\"\",\"url\":\"http://www.ls114.cn/forum-69-1.html\"},{\"desc\":\"\",\"url\":\"http://sports.jschina.com.cn/\"}]', '长跑', '1', '2020-02-08 21:58:49', '2020-02-09 11:16:31'), ('2', '江苏马拉松', '[]', '马拉松', '0', '2020-02-09 11:06:11', '2020-02-09 11:16:22'), ('3', '溧水拆迁', '[{\"desc\":\"\",\"url\":\"http://zrzy.jiangsu.gov.cn/njls/\"}]', '征地', '0', '2020-02-09 11:28:12', '2020-02-09 11:28:12');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
