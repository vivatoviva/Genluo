// 博客相关
const mysql = require('../db')

async function getArticle(page) {
  let sql = `SELECT * FROM article LIMIT ${(page - 1) * 10},10;`
  let count = 'select count(*) FROM article'
  let result = [];
  try {
    // let [data, pageNum] = await Promise.all(mysql.query(sql), mysql.query(count))
    let data = await mysql.query(sql);
    let pageNum = await mysql.query(count);
    
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

async function getTag() {
  // 获取tag列表
  
}

module.exports = {
  getArticle,
}