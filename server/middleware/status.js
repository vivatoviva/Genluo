const mysql = require('../db/index')
const Tip = require('../utils/Tips')
const hash = require('../utils/hash')
const moment = require('moment')

// 更新 hash 值
function updateHash(ctx, user) {
  const hashValue = hash.randomWord(false, 20);
  let sql = `
    update auto_login set login_hash='${hashValue}'
  `
  mysql.query(sql);
  ctx.cookies.set("loginHash", hashValue, {
    path: '/',       // 写cookie所在的路径
    maxAge: 10 * 60 * 1000, // cookie有效时长
    httpOnly: true,  // 是否只用于http请求中获取
    overwrite: false  // 是否允许重写
  });
}
module.exports =  async function status(ctx, next) {
  const url = ctx.url;
  if(!/^\/api\/admin/g.test(url) || /^\/api\/admin\/user/g.test(url)) {
    return await next()
  }
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
      let query = await mysql.query(sql);
      if(query.length > 0 && moment(query[0].create_time).add(30,'days').unix() - moment().unix() > 0 ) {
        // 可以进行登录
        updateHash(ctx, user);
        ctx.isLogin = true;
        ctx.userName = loginUser;
        return await next();
      }
    }
    ctx.body = Tip.noLogin;
  }
}