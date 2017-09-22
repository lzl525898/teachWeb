var express = require('express'); // 导入express模块
var router = express.Router();
var Users = require('../models/users'); // 导入数据模块
var tokenHandler = require('../utils/token');
// 添加数据的路由 /api/add?aaa=123&bbb=321
router.post('/add',function(req, res){
  var user = new Users({
    userName : "test",
    userSexy : 2,
    category : 1
  });
  user.save(function(err){
    if (err) {
      res.json({
        "flag" : "save",
        "error": err
      });
    } else {
      res.json({
        "flag" : "save"
      });
    }
  });
});

router.post('/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  if (undefined===username || undefined===password) {
    res.json({
      "flag" : "failed",
      "error" : "Parameter missing"
    });
  } else {
    Users.findByLoginInfo(username, password, function( err, users ){
      if ( users.length>0 ) {
        var token = tokenHandler.createToken(username, 7200); // 授权时间为
        var findQuery = {
          'userName': username,
          'passWord': password
        };
        var modifyInfos = {
          'token': token
        };
        Users.updateUserInfo(findQuery, modifyInfos, function(err){
          if (err) {
            res.json({
              'flag': "failed",
              "title": "更新token信息",
              'error': err,
              'info': 'update token failed...'
            });
          } else {
            res.json({
              "flag": "success",
              "title": "后台登录",
              "token": token,
              "info": {
                "phone":'15046009860'
              }
            });
          }
        });
      } else {
        res.json({
          "flag": "failed",
          "title": "查找用户信息",
          "username": username,
          "password" : password
        });
      }
    });
  }
});

module.exports = router; // 导出模块
