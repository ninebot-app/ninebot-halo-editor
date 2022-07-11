/*
*
* 开发环境配置
* 下面是码良依赖的各种服务，请务必逐一配置
* 
*/

module.exports = {
  sequelize: {
    dialect: 'mysql',
    port: '3306',
    database: 'godspen_db',
    host: '10.10.36.112',
    username: 'develop',
    password: 'ninebot'
  },
  oss: {
    accessKeyId: 'LTAI5tMziKJFMP8EHNSd1Q8R',
    accessKeySecret: 'e9wdRPTFa1n8Hs0boGh6pviCokwSM8',
    host: 'https://oss-app-h5.oss-cn-beijing.aliyuncs.com', // eg. https://xxxxxx.oss-cn-hangzhou.aliyuncs.com'
    bucket:'oss-app-h5',
    region: 'oss-cn-beijing' // eg. oss-cn-hangzhou
  },
  es: {
    index: 'godspen',
    type: 'doc',
    host: '',
  },
  // redis 单节点
  redis: {
    host: '10.10.36.112',
    port: 6379
  },
  // redis 集群
  // redis: [
  //   {host: '', port: 6390},
  //   {host: '', port: 6391},
  //   {host: '', port: 6390},
  // ],
  mail: {
    host: 'smtp.qiye.163.com',
    port: 465,
    secure: true, // 端口号为465时，请设置为true
    user: 'app@ninebot.com',
    pass: 'XmM5iQ8kcy}ybcP0',
  },
  ADMIN_PATH: '/' // 开发环境下的一级路径，也可以为全路径 http://127.0.0.1:8567/
}
