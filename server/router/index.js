const renderRouter = require('./render'); // 后端映射到前端的相关路由
const clientRouter = require('./client'); // 客户端的相关路由
const adminRouter = require('./admin'); // 管理端的相关路由

module.exports = [
  clientRouter,
  renderRouter,
  adminRouter,
];
