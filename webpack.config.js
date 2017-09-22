var webpack = require('webpack');
var path = require('path');
module.exports = {
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 8080,
    historyApiFallback: true, // 显示更详细错误信息
  },
  context: __dirname + '/client/src/', // __dirname表示整个项目的目录
  entry: './js/index.js',  // 定义入口文件
  module: {
    loaders: [
      {
        test: /\.js$/, // 解析所有的js文件
        exclude: /(node_modules)/, // 跳过node_modules文件夹
        loader: 'babel-loader', // 使用babel-loader解释代码
        query: {
          presets: ['react', 'es2015'] // 加载相关包
        }
      },
      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader'
      },
      {
          test: /\.less$/,
          loader: 'style!css!less'
      },
    ]
  },
  output: {
    path: __dirname + '/',
    filename: 'client.js' // 生成打包后的js文件
  }
}
