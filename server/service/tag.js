const mysql = require('../db')

module.exports = {
  async getTagsId(tags) {
    let tagIds = []
    for(let i = 0; i<tags.length; i++) {
      const tag = tags[i];
      let tagId;
      let querySql = `
        select * from tag where name='${tag}'
      `
      let query = await mysql.query(querySql);
      if(query.length === 0) {
        const insert = await mysql.query(`
          insert into tag(name, num) values('${tag}', 1);
        `)
        tagId = insert.insertId;
      } else {
        tagId=query[0].id;
      }
      tagIds.push(tagId);
    }
    return tagIds;
  },

  async getCategroyId(categroy) {
    let querySql = `
      select * from categroy where name='${categroy}'
    `
    let query = await mysql.query(querySql);
    let id;
    if(query.length === 0) {
      sql = `
        insert into categroy(name, num) values('${categroy}', 1);
      `
      const insert = await mysql.query(sql)
      id = insert.insertId;
    } else {
      id = query[0].id;
    }
    return id;
  }
}