const puppeteer = require('puppeteer');
const cheerio = require('cheerio')
let promises = []
exports.request = async (ctx) => {
  let send = await find(ctx)
  return send
}

async function find(ctx, str) {
  promises = []
  let data = await ctx.model.Category.findOne({ where: {
    wcbSwitch: '1'
  }})
  let list, key
  if (data) {
    list = data.wcbSiteList ? JSON.parse(data.wcbSiteList) : []
    key = data.wcbKeyStr
    if (list.length === 0) return
    list.forEach(async item => {
      promises.push(new Promise((resolve, reject) => {
        let str = (async() => {
          let str = await replies(item.url, key)
          return {
            url: item.url,
            desc: str
          }
        })()
        resolve(str)
      }))
    })

    Promise.all(promises).then(async strData => {
      console.log(strData.length)
      if (!strData || strData.length === 0) return
      await ctx.model.Category.update({
        ...data,
        wcbSiteList: JSON.stringify(strData)
      }, { where: {
        wcbSwitch: '1'
      }})
    })
    return promises
  }
}

async function replies(url, key) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let keystr = '', html = ''
  await page.goto(url, { waitUntil: 'load', timeout: 0 })
  await page.waitFor(7000 * 60);
  html = await page.evaluate(() => document.body.innerHTML);
  await browser.close();
  let $ = cheerio.load(html)
  $('a').each((index, el) => {
    let text = $(el).text()
    if (text.match(key)) {
      keystr += `<p><a href=${$(el).attr('href')}>${text}</a><p>`
    }
  })
  return keystr
}