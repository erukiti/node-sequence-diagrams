const puppeteer = require('puppeteer')

const sleep = (msec) => new Promise((resolve) => {
  setTimeout(() => resolve(), msec)
})

const writeSequenceDiagram = async (source, dest) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`file://${__dirname}/diagram.html`)
  await page.evaluate((src) => {
    const diagram = Diagram.parse(src)
    diagram.drawSVG('diagram', {theme: 'simple'})
  }, source)
  for (;;) {
    const svg = await page.$('svg').catch(() => null)
    if (svg) {
      await svg.screenshot({path: dest})
      break
    }
    await sleep(500)
  }
  await browser.close()
}

module.exports = {
  writeSequenceDiagram
}
