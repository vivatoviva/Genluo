const log4js = require('log4js');
const { logger } = require('../config/default')

log4js.configure(logger);

module.exports = async function log(ctx, next ) {
  ctx.logger = log4js.getLogger();
  return await next();
};
