/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 50636
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50636
 File Encoding         : 65001

 Date: 27/02/2023 14:32:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` int(4) NOT NULL,
  `photo` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tags` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `contain` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `classify` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `create_time` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of blog
-- ----------------------------

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` int(4) NOT NULL,
  `title` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `introduce` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_time` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `human` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `information` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cart
-- ----------------------------

-- ----------------------------
-- Table structure for destination
-- ----------------------------
DROP TABLE IF EXISTS `destination`;
CREATE TABLE `destination`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` int(4) NOT NULL,
  `title` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `view` int(4) NOT NULL,
  `comment` int(4) NOT NULL,
  `introduce` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `photo` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `precautions` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_time` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `num` int(4) NOT NULL,
  `price` int(4) NOT NULL,
  `like_num` int(4) NOT NULL,
  `comm_num` int(4) NOT NULL,
  `create_time` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of destination
-- ----------------------------

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` int(4) NOT NULL,
  `attractions_id` int(4) NOT NULL,
  `title` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `introduce` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_time` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `human` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `information` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `create_time` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `account` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
