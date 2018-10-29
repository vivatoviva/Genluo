const mysql = require('../db');

module.exports = {
  async getTagsId(tags) {
    const tagIds = [];
    const tagIdsPromise = [];
    const getTagId = async (tag) => {
      let tagId;
      const querySql = `
        select * from tag where name='${tag}'
      `;
      const query = await mysql.query(querySql);
      if (query.length === 0) {
        const insert = await mysql.query(`insert into tag(name, num) values('${tag}', 1);`);
        tagId = insert.insertId;
      } else {
        tagId = query[0].id;
        const { num } = query[0];
        const addNumSql = `
          update tag
            set num = ${num + 1}
            where id = ${tagId}
        `;
        mysql.query(addNumSql);
      }
      tagIds.push(tagId);

    };
    for (let i = 0; i < tags.length; i += 1) {
      tagIdsPromise.push(getTagId(tags[i]));
    }
    return tagIds;
  },

  async getCategroyId(categroy) {
    // 获取文章分类ID;
    const querySql = `
      select * from categroy where name='${categroy}'
    `;
    const query = await mysql.query(querySql);
    let id;
    if (query.length === 0) {
      const sql = `
        insert into categroy(name, num) values('${categroy}', 1);
      `;
      const insert = await mysql.query(sql);
      id = insert.insertId;
    } else {
      id = query[0].id;
      const { num } = query[0];
      const addNumSql = `
        update categroy 
          set num = ${num + 1}
          where id = ${id}
      `;
      mysql.query(addNumSql);
    }
    // 增加对应的ID数量
    return id;
  },
};
