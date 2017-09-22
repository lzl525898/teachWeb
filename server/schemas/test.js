var mongoose = require('mongoose'); // 导入数据路模块
var testSchema = new mongoose.Schema({ // 定义存储数据结构
  aaa: String,
  bbb: Number,
  ccc: {
    body: String,
    date: {
      type: Date,
      default: Date.now()
    }
  },
  ddd: Boolean
});
testSchema.statics = {  // testSchema的公共方法
  fetch: function(cb) { // 按bbb升序排序查找所有内容
    return this.find({}).sort('bbb').exec(cb);
  },
  findById: function(id, cb) { // 按_id查找指定内容
    return this.findOne({_id:id}).exec(cb);
  }
};
module.exports = testSchema;  // 导出模块

// testSchema.pre('save', function(next) {
//   if (this.isNew) {
//     this.eee.createAt = this.eee.updateAt = Date.now();
//   } else {
//     this.eee.updateAt = Date.now();
//   }
//   next();
// });
