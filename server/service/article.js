const mysql = require('../db')
const moment = require('moment')
const time = moment().format('YYYY-MM-DD HH:mm')

module.exports = {
  async updateArticle({id, title, content, descript, tagsId, cateId}) {
    // 首先添加新文章
    let sql = `
      update article set
        title='${title}',
        content='${content}',
        descript='${descript}',
        categroy_id='${cateId}',
        update_time='${time}'
      where id=${id}
    `
    await Promise.all([mysql.query(sql), this.operateTags(id, tagsId)]);
  },

  async addArticle({id,title, content, descript, tagsId, cateId}) {
    let sql = `
      insert into article(
        title,
        update_time,
        read_num,
        content,
        descript,
        create_time,
        categroy_id )
      values(
        '${title}',
        '${time}',
        1,
        '${content}',
        '${descript}',
        '${time}',
        ${cateId});
    `
    const query =await mysql.query(sql)
    await this.operateTags(query.insertId, tagsId);
  },

  async operateTags(id, tagsId) {
    if(!(id && tagsId)) throw new Error();
    // 首先清除所有
    let cleanSql = `
      delete from article_tag
      where article_id=${id}
    `
    await mysql.query(cleanSql);
    const inserList = []; 
    for(let i = 0; i < tagsId.length; i++) {
      inserList.push(mysql.query(`insert into article_tag(tag_id, article_id) values(${tagsId[i]}, ${id});`));
    }
    await Promise.all(inserList);
  }
}