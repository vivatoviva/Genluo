const Router = require('koa-router');
const controller = require('../controller');

const router = new Router();

// 博文列表
router.post('/api/article/list', controller.client.articleList);
// 博文内容
router.post('/api/article/content/:id', controller.client.articleContent);
// 博文详情
router.post('/api/article/detail/:id', controller.client.articleDetail);
// 标签列表
router.post('/api/tag/list', controller.client.tagList);
// 分类列表
router.post('/api/category/list', controller.client.categroyList);
// 文章查询热度加一
router.post('/api/article/read/:id', controller.client.articleRead);
// 统计相关信息
router.post('/api/statistics/detail', controller.client.statistics);
// RSS订阅
router.post('/api/article/rss');

module.exports = router;

// 使得中间代理可以产看返回的具体内容
