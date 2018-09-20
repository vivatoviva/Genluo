
const {
  ANALYZE
} = process.env
const pro = process.env.NODE_ENV === 'production'
const test = process.env.NODE_TEST === 'test'
const path = require('path')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin") 

module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config, {
    buildId,
    dev,
    isServer,
    defaultLoaders
  }) => {
    // config.module.rules.push({
    //   test: /\.scss&/,
    //   loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    //   exclude: [
    //     path.resolve(__dirname, 'node_modules')
    //   ]
    // })
    // config.plugins.push(
    //   new MiniCssExtractPlugin({
    //     filename: "static/[name].css",
    //     chunkFilename: "[id].css"
    //   })
    // )
    return config
  },
  exportPathMap: () => ({
    '/': {
      page: '/'
    },
  }),
}
