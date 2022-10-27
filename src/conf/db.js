const env = process.env.NODE_ENV; // 环境参数

// 配置
let MYSQL_CONF;

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'asdqwe123',
    port: '3306',
    database: 'sys',
  };
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'asdqwe123',
    port: '3306',
    database: 'sys',
  };
}

module.exports = { MYSQL_CONF };
