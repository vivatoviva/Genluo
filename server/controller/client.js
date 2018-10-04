const service = require('../service')
const Tip = require('../utils/Tips')

module.exports = {
  async articleList(ctx, next) {
    const { page, tagId, categroyId } = ctx.request.body;
    let data = null;
    try {
      data = await service.blog.getArticle({ page, tagId, categroyId })
      ctx.body = {...Tip.ok, data}
    } catch (e) {
      console.log('================================articleList================' ,e);
      ctx.body = Tip.datebaseError;
    }
  },

  async articleContent(ctx, next) {
    const { id } = ctx.params;
    let data = null;
    // 测试会不会阻塞渲染，是会的
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve()
    //   },1000)
    // })
    try {
      data = await service.blog.getContent({id}) 
      ctx.body = { ...Tip.ok, data }
    } catch (e) {
      console.log('===============获取内容=============', e)
      ctx.body = Tip.datebaseError
    }
  },

  async articleDetail(ctx, next) {
    const { id } = ctx.params;
    let data = null;
    try {
      data = await service.blog.getDetail({id}) 
      ctx.body = { ...Tip.ok, data }
    } catch (e) {
      console.log('===============文章详情=============', e)
      ctx.body = Tip.datebaseError
    }
  },

  async tagList(ctx, next) {
    let data = null;
    try {
      data = await service.blog.getTag()
      ctx.body = {...Tip.ok, data}
    } catch (e) {
      ctx.body = Tip.datebaseError;
    }
  },

  async categroyList(ctx, next) {
    let data = null;
    try {
      data = await service.blog.getCategroy()
      ctx.body = {...Tip.ok, data}
    } catch (e) {
      ctx.body = Tip.datebaseError;
    }
  },

  async articleRead(ctx, next) {
    let data = null;
    const { id } = ctx.params;
    try {
      data = await service.blog.read(id);
      ctx.body = { ...Tip.ok };
    } catch (e) {
      ctx.body = Tip.datebaseError;
      console.log('报错', e);
  
    }
  },
}
