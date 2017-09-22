var mongoose = require('mongoose');  // 导入数据库模块
var userSchema = require('../schemas/users'); // 导入已定义数据模式
var userdb = mongoose.model('users',userSchema); // 创建数据模块
module.exports = userdb; // 导出数据模块
