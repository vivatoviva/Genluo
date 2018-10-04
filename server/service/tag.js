const mysql = require('../db')

module.exports = {
  async getTagsId(tags) {
    let tagIds = []
    for(let i = 0; i<tags.length; i++) {
      const tag = tags[i];
      let querySql = `
        select * from tag where name='${tag}'
      `
      let query = await mysql.query(querySql);
      if(query.length === 0) {
        await mysql.query(`
          insert into tag(name, num) values('${tag}', 1);
        `)
        query = await mysql.query(querySql)
      }
      tagIds.push(query[0].id)
    }
    return tagIds;
  },

  async getCategroyId(categroy) {
    let querySql = `
      select * from categroy where name='${categroy}'
    `
    let query = await mysql.query(querySql);
    if(query.length === 0) {
      sql = `
        insert into categroy(name, num) values('${categroy}', 1);
      `
      await mysql.query(sql)
      query =await mysql.query(querySql)
    }
    return query[0].id
  }
}