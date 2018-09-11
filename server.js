const next = require('next')
const Koa = require('koa')
const router = require('koa-route')


const port = parseInt(process.env.PORT, 10) || 8868
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

function renderAndCache(ctx, pagePath, queryParams=null) {
  console.log('=================')
  return app.renderToHTML(ctx.req, ctx.res, pagePath, queryParams)
    .then((html) => {
      ctx.body = html
    })
    .catch((err) => {
      return app.renderError(err, ctx.req, ctx.res, pagePath, queryParams)
    })
}

app.prepare()
  .then(() => {
    const server = new Koa()

    server.use(router.get('/', ctx => renderAndCache(ctx, '/index')))
    server.use(router.get('/blog/tag/:id', ctx => renderAndCache(ctx, '/blog/tag/detail')))


    server.use(async (ctx) => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.info(`> Ready on http://localhost:${port}`)
    })
  })