const service = require('../service')
const Tip = require('../utils/Tips')
const mysql = require('../db')

module.exports = {
  async deleteArticle(ctx, next) {
    const { id } = ctx.request.body;
    if(id.length === 0) return ctx.body = Tip.paramError;
    let  whereSql = `id=${id[0]}`
    for(let i = 1; i<id.length; i++) {
      whereSql+=` or id=${id[i]}`
    }
    try {
      let sql = `
        update article
        set status='delete'
        where ${whereSql}
      `
      await ctx.mysql.query(sql);
      ctx.body = Tip.ok;
    } catch(e) {
      ctx.body=Tip.datebaseError;
    }
  },

  async operateArticle(ctx, next) {
    const { id, title, content, descript, tags, categroy } = ctx.request.body;
    if(!(title||content||descript||tags||categroy)) return ctx.body = Tip.paramError
    try {
      const  tagsId = await service.tag.getTagsId(tags)
      const cateId = await service.tag.getCategroyId(categroy)
      if(id) {
        // 更新操作
        await service.article.updateArticle({id, title, content, descript, tagsId, cateId})
      } else {
        // 添加操作
        await service.article.addArticle({content, title, descript, tagsId, cateId})
      }
      ctx.body = Tip.ok;
    } catch(e) {
      ctx.body = Tip.datebaseError;
    }
  },

  async getArticleList(ctx, next) {
    const {id, status, categroyId, tagId, sort, current = 1, pageSize = 10} = ctx.request.body;
    const specialQuery = (id||status||categroyId||tagId);

    if(sort) {
      if(['read_num', 'create_time', 'update_time'].includes(sort)) return ctx.body = Tip.paramError;
    }

    let wheresql = [];
    let list = [];
    let pagination = {
      current,
      pageSize,
    };
    if(id) {
      wheresql.push(`id=${id}`)
    }
    if(status) {
      wheresql.push(`status='${status}'`)
    }
    if(categroyId) {
      wheresql.push(`categroy_id=${categroyId}`)
    }
    // 查询统计个数的sql语句
    let countSql = `
      select count(*)
      from article, categroy
      ${
        specialQuery && `
          where ${wheresql.join(' and ')}
        `
      }
    `
    // 查询列表的数据
    let querySql = `
      select
        title,
        update_time,
        read_num,
        create_time,
        STATUS,
        categroy_id,
        name as 'categroy_name',
        article.id AS 'article_id'
      from article, categroy
      ${
        specialQuery && `
          where ${wheresql.join(' and ')}
        `
      }
      ${
        sort ? `ORDER BY ${sort.columnKey} ${sort.order};` : ''
      }
      limit ${(current - 1) * pageSize}, ${pageSize}
    `
    try {
      const count = await mysql.query(countSql);
      pagination.total = count[0]['count(*)'];
      const listquery = await mysql.query(querySql);
      list = listquery;
      ctx.body = { ...Tip.ok, data: {
        list,
        pagination,
      } }
    } catch(e) {
      ctx.body= Tip.datebaseError
    }
  }
}