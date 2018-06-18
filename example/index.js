const fs = require('fs')
const os = require('os')
const path = require('path')

const { writeSequenceDiagram } = require('../src')

const main = async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sequence-diagram'))
  const source = `
    A -> B: 5,000,000,000,000,000 yen
    B -> A: My Heart
  `

  const dest = path.join(tmp, 'test.png')
  await writeSequenceDiagram(source, dest)
  console.log(dest)
}

main()
