const moment = require('moment');
const mysql = require('../db');
const { escapeHtml } = require('../utils/escapeHtml');

module.exports = {
  async updateArticle({ id, title, content, descript, tagsId, cateId }) {
    const time = moment().format('YYYY-MM-DD HH:mm')
    // 首先添加新文章
    const sql = `
      update article set
        title='${title}',
        content='${escapeHtml(content)}',
        descript='${descript}',
        categroy_id='${cateId}',
        update_time='${time}'
      where id=${id}
    `;
    await Promise.all([mysql.query(sql), this.operateTags(id, tagsId)]);
  },

  async addArticle({id,title, content, descript, tagsId, cateId}) {
    const time = moment().format('YYYY-MM-DD HH:mm');
    const sql = `
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
        '${escapeHtml(content)}',
        '${descript}',
        '${time}',
        ${cateId});
    `;
    const query = await mysql.query(sql);
    await this.operateTags(query.insertId, tagsId);
    return query.insertId;
  },

  async operateTags(id, tagsId) {
    if (!(id && tagsId)) throw new Error();
    // 首先清除所有
    const cleanSql = `
      delete from article_tag
      where article_id=${id}
    `;
    await mysql.query(cleanSql);
    const inserList = [];
    for (let i = 0; i < tagsId.length; i += 1) {
      inserList.push(mysql.query(`insert into article_tag(tag_id, article_id) values(${tagsId[i]}, ${id});`));
    }
    await Promise.all(inserList);
  }
}
