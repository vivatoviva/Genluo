const service = require('../service')
const Tip = require('../utils/Tips')
const mysql = require('../db')

module.exports = {
  async deleteArticle(ctx, next) {
    const { id } = ctx.request.body;
    if(id.length === 0) return ctx.body = Tip.paramError;
    let  whereSql = id.map(item => `id=${item}`);

    try {
      let sql = `
        update article
        set status='delete'
        where ${whereSql.join(' or ')}
      `
      await ctx.mysql.query(sql);
      ctx.body = Tip.ok;
    } catch(e) {
      ctx.body=Tip.datebaseError;
    }
  },

  async operateArticle(ctx, next) {
    const { id, title, content, descript, tags, categroy } = ctx.request.body;
    if(!(title||content||descript||tags||categroy)) return ctx.body = Tip.paramError;

    try {
      const [ tagsId, cateId ] = await Promise.all([service.tag.getTagsId(tags), service.tag.getCategroyId(categroy)])
      if(id) {
        // 更新操作
        await service.article.updateArticle({id, title, content, descript, tagsId, cateId})
      } else {
        // 添加操作
        await service.article.addArticle({content, title, descript, tagsId, cateId})
      }
      ctx.body = Tip.ok;
    } catch(e) {
      console.log('操作文章报错',e)
      ctx.body = Tip.datebaseError;
    }
  },

  async getArticleList(ctx, next) {
    const {id, status, categroyId, tagId, sort, current = 1, pageSize = 10} = ctx.request.body;

    if(sort) {
      if(!['read_num', 'create_time', 'update_time'].includes(sort.columnKey)) return ctx.body = Tip.paramError;
      if(!['DESC', 'desc', 'asc', 'ASC'].includes(sort.order)) return ctx.body = Tip.paramError;
    }

    // 构造where语句
    let wheresql = ['article.categroy_id = categroy.id '];
    let list = [];
    let pagination = {
      current,
      pageSize,
    };
    if(id) {
      wheresql.push(`article.id=${id}`)
    }
    if(status) {
      wheresql.push(`status='${status}'`)
    }
    if(categroyId) {
      wheresql.push(`categroy_id=${categroyId}`)
    }
    if(tagId) {
      const tagsWhere = [];
      tagId.map(item => {
        tagsWhere.push(`tag_id = ${item}`)
      })
      wheresql.push(`article.id in (
        select article_id from article_tag where ${tagsWhere.join(' or ')}
      )
      `)
    }
    // 统计个数模板
    let countSql = `
      select count(*)
      from article, categroy
      where ${wheresql.join(' and ')}
    `
    // 查询列表模板
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
      where ${wheresql.join(' and ')}
      ${
        sort ? `ORDER BY ${sort.columnKey} ${sort.order}` : ''
      }
      limit ${(current - 1) * pageSize}, ${pageSize}
    `
    // 查询之后数据进行组装
    try {
      const [ count, listquery ] = await Promise.all([mysql.query(countSql), mysql.query(querySql)])
      pagination.total = count[0]['count(*)'];
      list = listquery;

      ctx.body = { ...Tip.ok, data: {
          list,
          pagination,
        }
      }
    } catch(e) {
      console.log('查询文章列表报错', e);
      ctx.body= Tip.datebaseError
    }
  }
}