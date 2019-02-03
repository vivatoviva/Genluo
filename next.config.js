
const { ANALYZE } = process.env;
const pro = process.env.NODE_ENV === 'production';
const test = process.env.NODE_TEST === 'test';
const path = require('path');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config, {
    isServer,
  }) => {
    const newConfig = Object.assign({}, config);
    // 配置快捷操作
    newConfig.resolve.alias.components = path.resolve(__dirname, './components');
    newConfig.resolve.extensions.push('jsx');
    // 打包分析插件
    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = webpackBundleAnalyzer;
      newConfig.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true,
      }));
    }
    return newConfig;
  },
  exportPathMap: () => ({
    '/': {
      page: '/',
    },
  }),
};
