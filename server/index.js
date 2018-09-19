const next = require('next')
const Koa = require('koa')
const routers = require('./router/index')
const port = parseInt(process.env.PORT, 10) || 8080
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const mysql = require('./db')
const koaBody = require('koa-body');

app.prepare()
  .then(() => {
    const server = new Koa()
    server.use(koaBody())
    // 挂载数据库对象
    server.use(async (ctx, next) => {
      ctx.mysql = mysql;
      await next();
    })
    // 添加相关路由
    routers.map(item => {
      server.use(item.routes())
    })
    // 静态资源渲染
    server.use(async (ctx) => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })
    // 最后收尾返回404页面
    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.info(`> Ready on http://localhost:${port}`)
    })
  })
