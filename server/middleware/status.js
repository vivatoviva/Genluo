const moment = require('moment');
const mysql = require('../db/index');
const Tip = require('../utils/Tips');
const hash = require('../utils/hash');

const { status } = require('../config/defaultConfig')

// 更新 hash 值
function updateHash(ctx, user) {
  const hashValue = hash.randomWord(false, 20);
  let sql = `
    update auto_login set login_hash='${hashValue}'
    where user_name='${user}'
  `
  mysql.query(sql);
  ctx.cookies.set("loginHash", hashValue, {
    path: '/',       // 写cookie所在的路径
    maxAge: 10 * 60 * 1000, // cookie有效时长
    httpOnly: true,  // 是否只用于http请求中获取
    overwrite: false  // 是否允许重写
  });
}

module.exports =  async function koaStatus(ctx, next) {
  const url = ctx.url;
  const match = Array.isArray(status.match) ? status.match : [ status.match ];
  // 判断是否开启此中间件
  if(!status.enable) return await next();
  // 判断是否过滤此接口
  const isBy = match.map(item => item.test(url));
  if(!isBy.includes(true)) return await next();

  if(ctx.session.isLogin) {
    // 当前是登录的
    return await next();
  } else {
    // 当前未登录
    const loginUser = ctx.cookies.get('userName');
    const loginHash = ctx.cookies.get('loginHash');
    if(loginHash && loginUser) {
      let sql = `
        select * from auto_login
        where user_name='${loginUser}' and login_hash='${loginHash}'
      `
      try {
        let query = await mysql.query(sql);
        const isFree =  moment(query[0].create_time).add(30,'days').unix() - moment().unix() > 0;

        if(query.length > 0 && isFree ) {
          // 可以进行登录
          updateHash(ctx, loginUser);
          ctx.session.isLogin = true;
          ctx.session.userName = loginUser;
          return await next();
        } else if(ctx.session.isLogin){
          // 并发请求的处理
          return await next();
        }
      } catch(e) {
        ctx.logger.error(ctx.url, ctx.request.body, e);
      }
    }
    ctx.body = Tip.noLogin;
  }
}