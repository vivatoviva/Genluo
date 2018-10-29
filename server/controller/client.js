const service = require('../service');
const Tip = require('../utils/Tips');
const mysql = require('../db')


module.exports = {
  async articleList(ctx) {
    const { page, tagId, categroyId } = ctx.request.body;
    let data = null;
    try {
      data = await service.blog.getArticle({ page, tagId, categroyId })
      ctx.body = { ...Tip.ok, data };
    } catch (e) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tip.datebaseError;
    }
  },

  async articleContent(ctx) {
    const { id } = ctx.params;
    let data = null;
    try {
      data = await service.blog.getContent({id}) 
      ctx.body = { ...Tip.ok, data }
    } catch (e) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tip.datebaseError;
    }
  },

  async articleDetail(ctx) {
    const { id } = ctx.params;
    let data = null;
    try {
      data = await service.blog.getDetail({id});
      ctx.body = { ...Tip.ok, data };
    } catch (e) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tip.datebaseError;
    }
  },

  async tagList(ctx) {
    let data = null;
    try {
      data = await service.blog.getTag()
      ctx.body = { ...Tip.ok, data };
    } catch (e) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tip.datebaseError;
    }
  },

  async categroyList(ctx) {
    let data = null;
    try {
      data = await service.blog.getCategroy();
      ctx.body = { ...Tip.ok, data };
    } catch (e) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tip.datebaseError;
    }
  },

  async articleRead(ctx) {
    const { id } = ctx.params;
    try {
      data = await service.blog.read(id);
      ctx.body = { ...Tip.ok };
    } catch (e) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tip.datebaseError;
  
    }
  },

  async statistics(ctx) {
    // 统计相关主题
    let data = null;
    const { query } = mysql;
    const articleCountSql = `
      select COUNT(*) as num from article
    `;
    const tagCountSql = `
      select count(*) as num from tag
    `;
    const cateCountSql = `
    select count(*) as num from categroy
    `;
    try {
      const [ articleCount, tagCount, cateCount ] = await Promise.all([query(articleCountSql), query(tagCountSql), query(cateCountSql)]);
      data = {
        articleCount: articleCount[0].num,
        tagCount: tagCount[0].num,
        cateCount: cateCount[0].num,
      };
      ctx.body = { data, ...Tip.ok };
    } catch (e) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body = Tip.datebaseError;
    }
  },
};
