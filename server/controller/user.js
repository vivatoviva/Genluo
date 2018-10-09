const Tip = require('../utils/Tips');
const service = require('../service');

module.exports = {
  async login(ctx, next) {
    const { user, password, isFree } = ctx.request.body;;
    // 缺少必要参数
    if(!user&&!password) return ctx.body={ ...Tip.paramError };
    try {
      const userId = await service.user.isUser({ user, password });
      // 账号密码错误
      if(!userId) return ctx.body = { ...Tip.passwordError };
      // 判断是不是需要免密操作
      if(isFree) {
        const { hashValue } = await service.user.setFree({ user, password, userId });
        ctx.cookies.set("userName", user, {
          path: '/',       // 写cookie所在的路径
          maxAge: 10 * 60 * 1000, // cookie有效时长
          httpOnly: true,  // 是否只用于http请求中获取
          overwrite: false  // 是否允许重写
        });
        ctx.cookies.set("loginHash", hashValue, {
          path: '/',       // 写cookie所在的路径
          maxAge: 10 * 60 * 1000, // cookie有效时长
          httpOnly: true,  // 是否只用于http请求中获取
          overwrite: false  // 是否允许重写
        });
      }
      // 存储session，返回session值
      ctx.session = {
        isLogin: true,
        userName: user,
      }
      ctx.body = Tip.ok;
    } catch(e) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tip.datebaseError;
    }
  },
  async logout(ctx, next) {
    ctx.session.isLogin = false;
    const userName = ctx.session.userName;
    // 拿到携带的cookie，如果含有进行清除，没有的话直接返回登录失败
    if(userName) {
      service.user.clearUser(userName);
    }
    ctx.body = Tip.ok;
  }
}