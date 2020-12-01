/*
 * @Date: 2020-11-23 13:58:50
 * @LastEditors: sam
 * @LastEditTime: 2020-12-01 17:48:42
 * @FilePath: /chart-demo/demo/vue.config.js
 */
const path = require('path') // 引入路径
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  runtimeCompiler: true,

  css: {
    sourceMap: true,
  },

  lintOnSave: false,
  // TODO:这个配置暂时无用
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('mixins', resolve('src/mixins'))
      .set('views', resolve('src/views'))
      .set('store', resolve('src/views'))
      .set('router', resolve('src/router'))
      .set('images', resolve('src/assets/images'))
  },
}
