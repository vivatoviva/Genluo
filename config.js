const isProduction = process.env.NODE_ENV === 'production';
const defaultConfig = {
  port: 3000,
};
// 开发环境
const devConfig = {
  domain: 'http://localhost',
};
// 生产环境
const productionConfig = {
  domain: 'http://120.78.71.60',
};

let config;
if (isProduction) {
  config = {
    ...defaultConfig,
    ...productionConfig,
  };
} else {
  config = {
    ...defaultConfig,
    ...devConfig,
  };
}
module.exports = config;
