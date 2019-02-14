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
    // use middleware
    server.use(koaLogger);
    server.use(koaStatus);
    // Mount the database
    server.use(async (ctx, next) => {
      ctx.mysql = mysql;
      await next();
    });
    // add router map
    routers.map(item => server.use(item.routes()));
    // static resource
    server.use(async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });
    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.info(`> Ready on http://localhost:${port}`);
    });
  });
