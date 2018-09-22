const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stats: {
    // One of the two if I remember right
    entrypoints: false,
    children: false
  },
  mode: 'development',
  entry: {
    app_min: path.join(__dirname, '/static/style/index.js'),
  }, // 已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname, '/static/style/dist'),
    filename: '[name].js',
  },
  devtool: 'none',
  devServer: {
    contentBase: './public', // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true,
    hot: true,
    port:  8080,
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      use: {
        loader: 'babel-loader',
      },
      exclude: /node_modules/,
    }, {
      test: /\.(eot|svg|ttf|woff).*$/,
      loader: 'url-loader',
      options: {
        limit: 15000,
      },
    },
    {
      test: /\.(gif|jpe?g|png|ico).*$/,
      loader: 'url-loader',
      options: {
        limit: 15000,
      },
    }, {
      test: /\.scss$/,
      use: {},
      use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, minimize: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ]
      ,
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
  ],
}