var express = require('express'); // 导入 express 模块
var port = process.env.PORT || 9527; // 修改默端口号为 9527
var mongoose = require('mongoose'); // 导入数据库模块
var bodyParser = require('body-parser');
var multer = require('multer');
var server = express(); // 创建服务对象
var tokenHandler = require('./server/utils/token');

mongoose.Promise = global.Promise; // DeprecationWarning: Mongoose: mpromise
mongoose.connect('mongodb://localhost/testdb'); // 连接数据库

// parse application/json
server.use(bodyParser.json());
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
//for parsing multipart/form-data
server.use(multer());

var apiRoutes = require('./server/routes/api'); // 导入路由模块

//中间件 设置跨域访问
server.all('*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//中间件 token验证
server.all('/api/*', function(req, res, next){
  if (req.originalUrl.indexOf('login')>=0) { // 调用的是login接口
    next();
  } else {
    var token = req.query.token;
    if (undefined===token) { // 没有传递token值
      return res.json({
        'isdeny': 'no',
        'title': 'token认证'
      });
    }
    if (tokenHandler.checkToken(token)) { // token校验通过
      next();
    } else { // token校验失败，需要重新登录
      return res.json({
        'isdeny': 'ok',
        'title': 'token认证'
      });
    }
  }
});

server.use('/api',apiRoutes); // 设置路由

server.listen(port); // 监听端口号

console.log("start server! "+port);
