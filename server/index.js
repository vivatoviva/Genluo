const Next = require('next');
const Koa = require('koa');
const koaBody = require('koa-body');
const KoaSession = require('koa-session');
const config = require('./config');
const routers = require('./router/index');
const mysql = require('./db');
const koaStatus = require('./middleware/status');
const koaLogger = require('./middleware/log');

const isDev = process.env.NODE_ENV !== 'production';
const app = Next({ dev: isDev });
const handle = app.getRequestHandler();
const { sessionConfig, port } = config;

app.prepare()
  .then(() => {
    const server = new Koa();
    server.keys = ['some secret hurr'];
    server.use(KoaSession(sessionConfig, server));
    server.use(koaBody());
    // 中间件插件
    server.use(koaLogger);
    server.use(koaStatus);
    // 挂载数据库对象
    server.use(async (ctx, next) => {
      ctx.mysql = mysql;
      await next();
    });
    // 添加相关路由
    routers.map(item => server.use(item.routes()));
    // 静态资源渲染
    server.use(async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });
    // 最后收尾返回404页面
    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.info(`> Ready on http://localhost:${port}`);
    });
  });
