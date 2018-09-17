// 博客相关
const mysql = require('../db')

async function getArticle(page) {
  let sql = 'select * from Blog where id = 1'
  
  return {
    pagination: {
        page:1,
        pageNum: 100,
    },
    acticleList: [{
        id: 10,
        title: '前端之巅',
        publishTime: 2642613746278,
    updateTime: 236423764782,
        tag: [1,2,3],
        readNum: 100,
        content: '',
        describe: ''
    }]
  }
}

 module.exports = {
  getArticle,
 }