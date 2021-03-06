# node-sequence-diagrams

node-sequence-diagrams write file from [bramp/js-sequence-diagrams: Draws simple SVG sequence diagrams from textual representation of the diagram](https://github.com/bramp/js-sequence-diagrams) source file.

## Install

```sh
$ npm i node-sequence-diagramgs
or
$ yarn add node-sequence-diagrams
```

## Example

```
const fs = require('fs')
const os = require('os')
const path = require('path')

const { writeSequenceDiagram } = require('node-sequence-diagrams')

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
```

## License

```

/** js sequence diagrams 2.0.1
 *  https://bramp.github.io/js-sequence-diagrams/
 *  (c) 2012-2017 Andrew Brampton (bramp.net)
 *  @license Simplified BSD license.
 */
```



```
Copyright 2018 (c) SASAKI Shunsuke <erukiti@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom
the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall
be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
```
