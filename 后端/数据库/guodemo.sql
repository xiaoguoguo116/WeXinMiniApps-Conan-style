/*
 Navicat MySQL Data Transfer

 Source Server         : www
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : guodemo

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 22/11/2020 23:14:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cunkuan
-- ----------------------------
DROP TABLE IF EXISTS `cunkuan`;
CREATE TABLE `cunkuan`  (
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `money` decimal(10, 2) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cunkuan
-- ----------------------------
INSERT INTO `cunkuan` VALUES ('guo', 20.00);

-- ----------------------------
-- Table structure for img
-- ----------------------------
DROP TABLE IF EXISTS `img`;
CREATE TABLE `img`  (
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of img
-- ----------------------------
INSERT INTO `img` VALUES ('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1951698874,31135803&fm=26&gp=0.jpg');
INSERT INTO `img` VALUES ('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3312252476,778740219&fm=26&gp=0.jpg');
INSERT INTO `img` VALUES ('https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00554-1906.jpg');

-- ----------------------------
-- Table structure for logintime
-- ----------------------------
DROP TABLE IF EXISTS `logintime`;
CREATE TABLE `logintime`  (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `date` datetime(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of logintime
-- ----------------------------

-- ----------------------------
-- Table structure for manager
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager`  (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pasword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of manager
-- ----------------------------
INSERT INTO `manager` VALUES (1, 'guo', '123');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('guo', '22');

-- ----------------------------
-- Table structure for xiaoshi
-- ----------------------------
DROP TABLE IF EXISTS `xiaoshi`;
CREATE TABLE `xiaoshi`  (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `intro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of xiaoshi
-- ----------------------------
INSERT INTO `xiaoshi` VALUES (1, '泡芙', '是用奶油、鸡蛋、低筋面粉等材料制作的一道甜品。奶油的脂肪含量比牛奶增加了20～25倍，而其余的成分如非脂乳固体（蛋白质、乳糖）及水分都大大降低，是维生素A和维生素D含量很高的调料。', 3.00, 'https://bkimg.cdn.bcebos.com/pic/58ee3d6d55fbb2fb05db8b5d454a20a44723dc89?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg');
INSERT INTO `xiaoshi` VALUES (2, '烧卖', '是一种以小麦面粉加水和成硬面团、经醒制后用轴槌擀压成荷叶边面皮，包裹肉馅上笼蒸熟的中国传统面食。', 3.00, 'https://bkimg.cdn.bcebos.com/pic/4ec2d5628535e5ddaf7aa1c879c6a7efce1b6256?x-bce-process=image/resize,m_lfit,w_220,limit_1');
INSERT INTO `xiaoshi` VALUES (3, '榴莲酥', '榴莲酥是用榴莲果肉和面粉烤制的一种甜点。金黄诱人的榴莲酥以新鲜榴莲果肉配制的软滑馅心，配以层次分明、异常松化、做工精细的酥皮，令人食指大动。吃完后淡淡的榴莲味让人“榴莲”忘返', 3.00, 'https://bkimg.cdn.bcebos.com/pic/d62a6059252dd42aae8af602093b5bb5c8eab89c?x-bce-process=image/resize,m_lfit,w_235,h_235,limit_1');
INSERT INTO `xiaoshi` VALUES (4, '水果捞', '【材料】 西瓜(黄、红肉)、菠萝蜜、奇异果、吕宋芒、番石榴、美国红提、夏威夷木瓜、亚答子、椰青、哈密瓜、甘瓜、菠萝、香橙、荔枝、火龙果、香蕉、油桃、桑葚、布朗、贡梨、 西米、香兰椰糖', 3.00, 'https://bkimg.cdn.bcebos.com/pic/f31fbe096b63f6246b605b77500cfcf81a4c510f0524?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg');

-- ----------------------------
-- Table structure for zhushi
-- ----------------------------
DROP TABLE IF EXISTS `zhushi`;
CREATE TABLE `zhushi`  (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `intro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of zhushi
-- ----------------------------
INSERT INTO `zhushi` VALUES (1, '杂酱面', '杂酱面，主料包括：猪后臀尖肉50克，黄酱30克，鸡蛋一个，面条150克，黄瓜50克，胡萝卜30克。 操作方法是：把猪肉切丁，黄酱用啤酒调稀；黄瓜切丝，杂酱面，主料包括：猪后臀尖肉50克，黄酱30克，鸡蛋一个，面条150克，黄瓜50克，胡萝卜30克。 操作方法是：把猪肉切丁，黄酱用啤酒调稀；黄瓜切丝，胡萝卜切片。\r\n油热放肉，变色后放入葱、姜，香菜，待炒出香味后倒入调好的黄酱。小火慢炒，等酱有了香味时放点白糖；酱变成红黑色时，放入葱末，加香油，料酒，翻炒均匀后马上起锅。酱炸好后和配菜、面一起拌匀。', 12.00, 'https://bkimg.cdn.bcebos.com/pic/d6ca7bcb0a46f21fbe093698386c7c600c33864400ed?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg');
INSERT INTO `zhushi` VALUES (2, '豌杂面', '豌杂面是重庆市的一种特色小吃，属于川菜系；该菜品以豌豆与杂酱为主料，配以葱姜蒜为辅料制作而成，口感润滑，豌豆的软糯与面条的劲道以及杂酱的香甜，令人回味无穷。', 12.00, 'https://bkimg.cdn.bcebos.com/pic/11385343fbf2b2119313c19c10c972380cd790232085?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg');
INSERT INTO `zhushi` VALUES (3, '黄焖鸡', '黄焖鸡米饭又叫香鸡煲、浓汁鸡煲饭，属于鲁菜系家常菜品，起源于山东省济南市。主要食材是鸡腿肉，配以青椒、土豆、香菇等焖制而成，味道美妙，具有肉质鲜美嫩滑的特点。', 12.00, 'https://bkimg.cdn.bcebos.com/pic/738b4710b912c8fcc3287c65f6039245d78821ba?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg');
INSERT INTO `zhushi` VALUES (4, '米线', '米线，中华传统风味小吃。米线用米制成，长条状，截面为圆形，色洁白，有韧性，于开水中稍煮后捞出，放入肉汤中，一般拌入葱花、酱油、盐、味精、油辣、肉酱，趁热吃。粉丝与其类似，但口感不同。', 12.00, 'https://bkimg.cdn.bcebos.com/pic/2934349b033b5bb5ea2e3c6c3cd3d539b700bca2?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg');

SET FOREIGN_KEY_CHECKS = 1;
