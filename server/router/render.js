const Router = require('koa-router');
const LRUCache = require('lru-cache');
const next = require('next');
const config = require('../config/default');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const router = new Router();
const ssrCache = new LRUCache(config.urlCache);

const getCacheKey = (ctx) => `${ctx.req.url}`;
// 进行渲染缓存
function renderAndCache(ctx, pagePath, queryParams) {
  const key = getCacheKey(ctx);
  // 命中缓存(存在优化点)
  if (ssrCache.has(key) && config.openUrlCache) {
    ctx.body = ssrCache.get(key);
    return;
  }
  // 合并参数
  const params = {
    ...ctx.query,
    ...ctx.params,
  };
  console.log(ctx.req);
  
  return app.renderToHTML(ctx.req, ctx.res, pagePath, params)
    .then((html) => {
      // Let's cache this page
      ctx.body = html;
      ssrCache.set(key, html);
    })
    .catch((err) => {
      console.log('render error')
      return app.renderError(err, ctx.req, ctx.res, pagePath, queryParams)
    })
}

app.prepare()
  .then(() => {
    router.get('/', ctx => renderAndCache(ctx, '/'))
    router.get('/blog/tag', ctx=> renderAndCache(ctx, '/blog/tag'))
    router.get('/blog/category', ctx=> renderAndCache(ctx, '/blog/category'))
    router.get('/blog', ctx=> renderAndCache(ctx, '/blog'))
    router.get('/blog/archives', ctx=> renderAndCache(ctx, '/blog/archives'))
    router.get('/blog/archives/:page', ctx=> renderAndCache(ctx, '/blog/archives'))
    router.get('/blog/tag/:tagId', ctx => renderAndCache(ctx, '/blog/archives'))
    router.get('/blog/tag/:tagId/:page', ctx => renderAndCache(ctx, '/blog/archives'))
    router.get('/blog/category/:cateId', ctx => renderAndCache(ctx, '/blog/archives'))
    router.get('/blog/category/:cateId/:page', ctx => renderAndCache(ctx, '/blog/archives'))
    router.get('/blog/:id', ctx => renderAndCache(ctx, '/blog/article'))
    router.get('/resume', ctx => renderAndCache(ctx, '/resume'))
    router.get('/about', ctx => renderAndCache(ctx, '/about'))
  })

module.exports = router;
