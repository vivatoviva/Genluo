const config = {
  // 启动端口
  port: 3000,
  // 数据库配置
  mysql: {
    host: '120.78.71.60',
    user: 'root',
    password: 'genluo123',
    database: 'personSite',
    HOST: 'localhost'    
  },
  // 缓存进行优化
  openUrlCache: false,
  urlCache: {
    max: 100,
    maxAge: 1000 * 60 * 60 // 1hour
  },
}

module.exports = config;
