var mongoose = require('mongoose');

var users = new mongoose.Schema({
  userName : {
    type: String,
    required: true,
    unique: true
  }, // 用户名
  userNick : String, // 用户昵称
  passWord : String, // 用户密码
  userSexy : Number, // 用户性别
  category : Number, // 用户类型
  integral : Number, // 积分
  salt : String, // 密码加盐
  token : String, // 令牌
  email : {
    email : String, // 邮箱
    status : Number // 是否绑定
  },
  telphone : {
    phone : String, // 手机
    status : Number // 是否绑定
  },
  avatarPath : String, // 头像
  otherInfo : {
    parentId : mongoose.Schema.Types.ObjectId,    // 所属家长
    courseId : [ mongoose.Schema.Types.ObjectId ], // 拥有课程
    collectId : [ mongoose.Schema.Types.ObjectId ], // 课程收藏
    worksId : [ mongoose.Schema.Types.ObjectId ], // 我的作品
    creatAt : { // 账号创建时间
      type : Date,
      default : Date.now()
    }
  }
});

users.statics = {
  findById : function( id, callback ){ // 通过 _id 查找 用户
    return this.findOne({ _id:id }).exec( callback );
  },
  findByLoginInfo : function( userName, passWord, callback){ // 通过登录信息查找
    return this.find({ userName:userName, passWord:passWord }).exec( callback );
  },
  updateUserInfo : function (find, modify, callback){
    return this.update(find, modify).exec( callback );
  }
};

module.exports = users;
