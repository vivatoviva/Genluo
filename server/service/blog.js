// 博客相关
const mysql = require('../db')

async function getArticle({ page = 1, tagId, categroyId, id },hasContent = false) {
  // 查询模板  
  let sql = `
    SELECT
      title,
      update_time,
      read_num,
      descript,
      create_time,
      STATUS,
      categroy_id,
      ${
        hasContent ? 'content,' : ''
      }
      name as 'categroy_name',
      article.id AS 'article_id'
    FROM
      article,
      categroy
    WHERE
      article.categroy_id = categroy.id 
      ${ id ? `
      and article.id = ${id}
      ` : ''}
      ${ tagId ? `
      and article.id in (
        select article_id from article_tag where tag_id = ${tagId}
      )
      ` : ''}
      ${categroyId ? 'and categroy_id =' + categroyId: ''}
    LIMIT ${(page - 1) * 10},
    10;
  `
  // 统计条数sql语句
  let count = `
    SELECT
      count(*)
    FROM
      article,
      categroy
    WHERE
      article.categroy_id = categroy.id 
      ${ id ? `
      and article.id = ${id}
      ` : ''}
      ${ tagId ? `
      and article.id in (
        select article_id from article_tag where tag_id = ${tagId}
      )
      ` : ''}
      ${categroyId ? 'and categroy_id =' + categroyId: ''}
  `
  let result = [];
  try {
    let [data, pageNum] = await Promise.all([mysql.query(sql),mysql.query(count)])
    let tagsPromiseList = [];
    for(let item of data) {
      // 查询相tag信息
      const sql = `select tag_id, name from article_tag, tag where article_tag.article_id = ${item.article_id} and article_tag.tag_id = tag.id`
      tagsPromiseList.push(mysql.query(sql));
    }
    const tags = await Promise.all(tagsPromiseList);
    for(let i = 0; i<tags.length; i++) {
      data[i].tags = tags[i];
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

async function getContent({id}) {
  let sql = `select content from article where id=${id}`
  let array = await mysql.query(sql);
  return (array[0] &&  array[0].content) || null
}

async function  getDetail({id}) {
  const data = await getArticle({id}, true)
  return data.list[0] || null
}

async function read(id) {
  let querySql = `
    select
      read_num
    from article
    where id = ${id}
  `
  const query = await mysql.query(querySql);
  const num = query && query[0]['read_num'];

  let updateSql = `
    update
      article
      set read_num = ${num + 1}
    where id = ${id}
  `
  await mysql.query(updateSql);
}

module.exports = {
  getArticle,
  getTag,
  getCategroy,
  getContent,
  getDetail,
  read,
}
