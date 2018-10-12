
const { ANALYZE } = process.env;
const pro = process.env.NODE_ENV === 'production';
const test = process.env.NODE_TEST === 'test';
const path = require('path');

module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config, {
    isServer,
  }) => {
    // 配置快捷操作
    config.resolve.alias['components'] = path.resolve(__dirname, './components');
    config.resolve.extensions.push('jsx');
    // 打包分析插件
    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true,
      }));
    }
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
