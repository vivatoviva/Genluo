const Router = require('koa-router')
const controller = require('../controller');
const router = new Router();


// 登录
router.post('/api/admin/user/login', controller.user.login);
// 登出
router.post('/api/admin/user/logout', controller.user.logout);
// tag列表
router.post('/api/admin/tags/list', controller.client.tagList)
// cate列表
router.post('/api/admin/categroy/list', controller.client.categroyList)
// 文章列表
router.post('/api/admin/article/list', controller.admin.getArticleList)
// delete
router.post('/api/admin/article/delete', controller.admin.deleteArticle)
// operate
router.post('/api/admin/article/operate', controller.admin.operateArticle)
// 详情
router.post('/api/admin/article/detail', controller.admin.articleDetail)

module.exports = router;