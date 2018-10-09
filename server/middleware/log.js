// 配置日志文件

var log4js = require('log4js');
const { logger } = require('../config/default')
log4js.configure(logger);

module.exports = async function log(ctx, next ) {
  const log = log4js.getLogger();
  ctx.logger = log;
  return await next();
}