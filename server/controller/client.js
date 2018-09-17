const service = require('../service')
const Tip = require('../utils/Tips')
async function articleList(ctx, next) {
  const { query, body } = ctx
  const { page } = query;
  let data = null;

  try {
    data = await service.blog.getArticle(page)
    ctx.body = {...Tip.ok, data}
  } catch (e) {
    ctx.body = Tip.datebaseError;
  }
}
module.exports = {
  articleList,
}