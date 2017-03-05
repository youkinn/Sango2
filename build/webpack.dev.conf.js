var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// UPGRADE: 添加BrowserSync的支持
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders()
  },
  externals: {
    // UPGRADE:
    // 将我们所需要的库在外部引用,而不是打包在提供商包里
    // 其中建是我们在应用中使用的名字,值使我们引入的文件的全局名字
    "vue-router": "VueRouter",
    "vue-resource": "VueResource",
    "vue": "Vue",
    "vue-touch": "VueTouch"
  },
  // eval-source-map is faster for development
  // devtool: '#eval-source-map',
  devtool: '#source-map',
  plugins: [
    // UPGRADE:
    // 此处是BrowserSync的配置部分
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3030,
      // Proxy the default webpack dev-server port
      proxy: 'http://localhost:8090/',
      notify: false,
      // 如果不想默认打开外部的链接的话,使用local选项
      open: 'external',
      // Let webpack handle the reload
      // codeSync: false
      codeSync: true
    }),
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index-dev.html',
      inject: true
    })
  ]
})