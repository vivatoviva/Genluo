const service = require('../service')

async function articleList(ctx, next) {
  const { query, body } = ctx
  const { page } = query;
  let data = null;

  try {
    data = service.blog.getArticle(page)
  } catch (e) {

  }
  console.log(ctx.mysql)
  ctx.body = data;

}
module.exports = {
  articleList,
}