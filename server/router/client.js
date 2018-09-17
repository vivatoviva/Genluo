const Router = require('koa-router')
const controller = require('../controller');
const router = new Router();

// 博文列表
router.get('/api/article/list', controller.client.articleList)
// 标签列表
router.get('/api/tag/list')
// 分类列表
router.get('/api/category/list')
// 统计相关信息
router.get('/api/statistics/detail')

module.exports = router;