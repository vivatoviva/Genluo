const Router = require('koa-router')
const controller = require('../controller');
const router = new Router();


// 博文列表
router.post('/api/article/list', controller.client.articleList)

// 博文内容
router.post('/api/article/content/:id',controller.client.articleContent)
// 博文详情
router.post('/api/article/detail/:id', controller.client.articleDetail)
// 标签列表
router.post('/api/tag/list', controller.client.tagList)
// 分类列表
router.post('/api/category/list', controller.client.categroyList)
// 统计相关信息
router.get('/api/statistics/detail')
// 文章点击相关

module.exports = router;