const service = require('../service')
const Tip = require('../utils/Tips')

async function articleList(ctx, next) {
  const { page, tagId, categroyId } = ctx.request.body;
  let data = null;
  try {
    data = await service.blog.getArticle({ page, tagId, categroyId })
    ctx.body = {...Tip.ok, data}
  } catch (e) {
    console.log('================================articleList================' ,e);
    ctx.body = Tip.datebaseError;
  }
}
// 获取相关tag列表
async function tagList(ctx, next) {
  let data = null;
  try {
    data = await service.blog.getTag()
    ctx.body = {...Tip.ok, data}
  } catch (e) {
    ctx.body = Tip.datebaseError;
  }
}
// 获取分类列表
async function categroyList(ctx, next) {
  let data = null;
  try {
    data = await service.blog.getCategroy()
    ctx.body = {...Tip.ok, data}
  } catch (e) {
    ctx.body = Tip.datebaseError;
  }
}

module.exports = {
  articleList,
  tagList,
  categroyList,
}