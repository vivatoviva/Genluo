const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const config = require('./config/default')

const Koa = require('koa')
const routers = require('./router/index')
const port = parseInt(process.env.PORT, 10) || config.port
const mysql = require('./db')
const koaBody = require('koa-body');
const KoaSession = require('koa-session');
const fs = require('fs')


app.prepare()
  .then(() => {
    const server = new Koa()
    server.keys=['some secret hurr']
    const CONFIG = {
      key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
      maxAge: 86400000,
      overwrite: true, /** (boolean) can overwrite or not (default true) */
      httpOnly: true, /** (boolean) httpOnly or not (default true) */
      signed: true, /** (boolean) signed or not (default true) */
      rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
      renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    }
    server.use(KoaSession(CONFIG, server))
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

// 监听文件修改重新加载代码
fs.watch(require.resolve('./router/index'), function () {
  cleanCache(require.resolve('./router/index'));
  try {
    routers = require('./router/index');
  } catch (ex) {
      console.error('module update failed');
  }
});

function cleanCache(modulePath) {
  require.cache[modulePath] = null;
}
