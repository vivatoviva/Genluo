// 博客相关
const mysql = require('../db')

async function getArticle({ page, pageId, tagId, categroyId }) {
  // 查询模板  
  let sql = `
    SELECT
      title,
      content,
      update_time,
      read_num,
      descript,
      create_time,
      STATUS,
      categroy_id,
      name as 'categroy_name',
      article.id AS 'article_id'
    FROM
      article,
      categroy
    WHERE
      article.categroy_id = categroy.id 
      ${ tagId ? `
      and article.id in (
        select article_id from article_tag where tag_id = ${tagId}
      )
      ` : ''}
      ${ pageId ? `
        and article.id = ${pageId}
      ` : ''
      }
      ${categroyId ? 'and categroy_id =' + categroyId: ''}
    LIMIT ${(page - 1) * 10},
    10;
  `
  
  let count = 'select count(*) FROM article';
  let result = [];
  
  try {
    let data = await mysql.query(sql);
    let pageNum = await mysql.query(count);

    for(let item of data) {
      // 查询相tag信息
      const sql = `select tag_id, name from article_tag, tag where article_tag.article_id = ${item.article_id} and article_tag.tag_id = tag.id`
      item.tags = await mysql.query(sql);
    }

    result = {
      pagination: {
        page,
        pageNum: pageNum[0]['count(*)']
      },
      list: data
    }

  } catch(e) {
    throw e;
  }
  return result;
}

// 获取tag列表
async function getTag() {
  // 获取tag列表
  let sql = `select * from tag`;
  let result = null;
  try {
    result = await mysql.query(sql);
  } catch(e) {
    throw e
  }
  return result;
}
// 获取分类列表
async function getCategroy() {
  let sql =  `select * from categroy`
  let result = null;
  try {
    result = await mysql.query(sql)
  } catch (e) {
    throw e
  }
  return result;
}

module.exports = {
  getArticle,
  getTag,
  getCategroy,
}
