let DB_USER = 'root';
let DB_PASSWORD = '123456';
let DB_HOST = '127.0.0.1'
const ARGV_2 = JSON.parse(process.argv[2] || {});

DB_USER = (ARGV_2 && ARGV_2.u) || 'root';
DB_PASSWORD = (ARGV_2 && ARGV_2.p) || '123456';
DB_HOST = (ARGV_2 && ARGV_2.h) || '127.0.0.1';

exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  database: 'wcb-repiltes',
  host: `${DB_HOST}`,
  port: 3306,
  username: `${DB_USER}`,
  password: `${DB_PASSWORD}`,
// 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
  underscored: true,
// 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
  timezone: '+08:00',
};