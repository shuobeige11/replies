const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const request = require('./request').request
let transport = null
let mailOptions = null

exports.send = async (Config, ctx) => {
  setting(Config)
  if (!transport) {
    new Error('没有配置邮件服务信息') 
    return '没有配置邮件服务信息'
  }
  let promise = await request(ctx)
  if (!promise) return '暂无内容'
  Promise.all(promise).then(strData => {
    if (!strData || strData.length === 0) return
    let str = ''
    strData.forEach(item => {
      str += `<h2>${item.url}</h2>${item.desc}`
    })
    mailOptions.html = str
    transport.sendMail(mailOptions, (error, res) => {
      if(error){
        throw error
      } 
      transport.close(); // 如果没用，关闭连接池
    });
  })
}

function setting(Config) {
  let obj = {
    host: Config.wcbServerAddress, // 邮箱主机
    secure: true, // 使用 SSL
    secureConnection: true, // 使用 SSL
    port: Math.ceil(Config.wcbServerPorts) // SMTP 端口
  }
  if (Config.wcbAuthPass) {
    obj = {
      ...obj,
      auth: {
        user: Config.wcbMailFrom, // 账号   你自定义的域名邮箱账号
        pass: Config.wcbAuthPass    // 密码   你自己开启SMPT获取的密码
      }
    }
  }
  mailOptions = {
    from: Config.wcbMailFrom, // 发件地址
    to: Config.wcbMailTo, // 收件列表
    subject: "我要的信息" + (+new Date()), // 标题
  }
  transport = nodemailer.createTransport(smtpTransport(obj))
}

