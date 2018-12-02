const renderRouter = require('./render');
const clientRouter = require('./client');
const adminRouter = require('./admin');

module.exports = [
  clientRouter,
  renderRouter,
  adminRouter,
];
