var mongoose = require('mongoose');  // 导入数据库模块
var testSchema = require('../schemas/test'); // 导入已定义数据模式
var testdb = mongoose.model('testdb',testSchema); // 创建数据模块
module.exports = testdb; // 导出数据模块
