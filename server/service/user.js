const mysql = require('../db')
const hash = require('../utils/hash')

module.exports = {
  async isUser({ user, password}) {
    let sql = `
      select *
      from user
      where user='${user}' and password='${password}'
    `
    const query = await mysql.query(sql);
    if(query.length === 0) {
        return false
    } else {
      return query[0].id;
    }
  },
  islogin() {

  },
  async setFree({user, password, userId}) {
    let querySql = `
      select * from auto_login where user_name='${user}'
    `
    let sql;
    const query = await mysql.query(querySql);
    const hashValue = hash.randomWord(false, 20);
    if(query.length === 0) {
      // 新增一条免登记录
      sql = `
        insert into auto_login(user_name, user_id, login_hash, create_time)
        values('${user}', ${userId}, '${hashValue}', '2018-09-11 19:21:11')
      `
    } else {
      // 修改现有免登记录，可能用户账号被盗，或者在其他电脑上进行登录
      sql = `
        update auto_login
          set login_hash='${hashValue}'
          where user_name='${user}'
      `
    }
    await mysql.query(sql);
    return { user, hashValue };
  },

  async clearUser(userName) {
    let sql = `
      delete from auto_login
      where user_name='${userName}'
    `
    return await mysql.query(sql);
  }
}