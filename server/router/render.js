const Router = require('koa-router')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const router = new Router();

function renderAndCache(ctx, pagePath, queryParams=null) {
  console.log(ctx.params);

  return app.renderToHTML(ctx.req, ctx.res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      ctx.body = html
    })
    .catch((err) => {
      return app.renderError(err, ctx.req, ctx.res, pagePath, queryParams)
    })
}
app.prepare()
  .then(() => {
    router.get('/', ctx => renderAndCache(ctx, '/index'))
    router.get('/blog/:id', ctx => renderAndCache(ctx, '/blog/article'), ctx.params)
    router.get('/blog', ctx=> renderAndCache(ctx, '/blog/index'))
    router.get('/blog/tag', ctx=> renderAndCache(ctx, '/blog/tag'))
    router.get('/blog/tag/:tagId', ctx => renderAndCache(ctx, '/blog/archives', ctx.params))
    router.get('/blog/category', ctx=> renderAndCache(ctx, '/blog/category'))
    router.get('/blog/category/:cateId', ctx => renderAndCache(ctx, '/blog/archives', ctx.params))
    router.get('/blog/archives', ctx=> renderAndCache(ctx, '/blog/archives'))
    router.get('/resume', ctx => renderAndCache(ctx, '/resume/index'))
  })


module.exports = router;
