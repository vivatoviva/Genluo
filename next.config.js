
const {
  ANALYZE
} = process.env
const pro = process.env.NODE_ENV === 'production'
const test = process.env.NODE_TEST === 'test'
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 

module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config, {
    buildId,
    dev,
    isServer,
    defaultLoaders
  }) => {
    console.log('服务器端配置', isServer);
      
    // 提取css文件
    // config.module.rules.push({
    //   test: /\.sass/,
    //   loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    //   exclude: [
    //     path.resolve(__dirname, 'node_modules')
    //   ]
    // })
    // config.plugins.push(
    //   new MiniCssExtractPlugin({
    //     filename: "static/[name].css",
    //   })
    // )

    // 配置eslint检测
    // config.module.rules[0].use = [{
    //   loader: 'eslint-loader', 
    //   options: { fix: true }
    // }, {
    //   loader: 'hot-self-accept-loader',
    //   options: { 
    //     include: [ 'D:\\github\\personalSite\\pages' ],
    //     extensions: /\.+(jsx|js)$/ 
    //   } 
    // }]
    return config
  },
  exportPathMap: () => ({
    '/': {
      page: '/'
    },
  }),
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  }
}
