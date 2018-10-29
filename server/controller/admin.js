const service = require('../service');
const Tip = require('../utils/Tips');
const mysql = require('../db');
const { unescapeHtml } = require('../utils/escapeHtml');

module.exports = {
  async deleteArticle(ctx) {
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
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body=Tip.datebaseError;
    }
  },

  async operateArticle(ctx) {
    // 新建和编辑页面
    let { id, title, content, descript, tags, categroy } = ctx.request.body;
    if (!(title || content || descript || tags || categroy)) return ctx.body = Tip.paramError;
    try {
      // const [ tagsId, cateId ] = await Promise.all([service.tag.getTagsId(tags), service.tag.getCategroyId(categroy)]);
      const tagsId = await service.tag.getTagsId(tags);
      const cateId = await service.tag.getCategroyId(categroy);
      if (id) {
        // 更新操作
        await service.article.updateArticle({id, title, content, descript, tagsId, cateId})
      } else {
        // 添加操作
        id = await service.article.addArticle({content, title, descript, tagsId, cateId})
      }
      ctx.body = {
        ...Tip.ok,
        data: {
          ...ctx.request.body,
          id,
        },
      }
    } catch(e) {
      ctx.logger.error(ctx.url, ctx.request.body, e);
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
      const cateWhere = [];
      categroyId.map(item => {
        cateWhere.push(`categroy_id=${item}`)
      })
      wheresql.push(cateWhere.join(' or '))
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
      ctx.logger.error(ctx.url, ctx.request.body, e);
      ctx.body= Tip.datebaseError
    }
  },
  
  async articleDetail(ctx, next) {
    const { id } = ctx.request.body;
    if(!id) return ctx.body = { ...Tip.paramError };
    let sql = `
      select title, descript, name as categroy, article.id as id, content,status
      from article, categroy
      where article.categroy_id = categroy.id and article.id =${id}
    `
    let tagQuery = `
      select name
      from tag, article_tag
      where article_tag.tag_id = tag.id and article_id=${id}
    `
    const [ data, list ] = await Promise.all([mysql.query(sql), mysql.query(tagQuery)]);
    ctx.body = {
      ...Tip.ok,
      data: {
        ...data[0],
        content: unescapeHtml(data[0].content),
        tags: list.map(item => item.name),
      }
    }

  }
}