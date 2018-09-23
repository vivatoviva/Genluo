const Router = require('koa-router')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const router = new Router();

function renderAndCache(ctx, pagePath, queryParams) {
  console.log(ctx.request.url)
  return app.renderToHTML(ctx.req, ctx.res, pagePath, queryParams || ctx.params)
    .then((html) => {
      console.log('render ok ')
      // Let's cache this page
      ctx.body = html
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
    router.get('/blog/tag/:tagId', ctx => renderAndCache(ctx, '/blog/archives'))
    router.get('/blog/:id', ctx => renderAndCache(ctx, '/blog/article'))
    router.get('/blog/category/:cateId', ctx => renderAndCache(ctx, '/blog/archives'))
    router.get('/resume', ctx => renderAndCache(ctx, '/resume'))
    router.get('/about', ctx => renderAndCache(ctx, '/about'))

  })


module.exports = router;
