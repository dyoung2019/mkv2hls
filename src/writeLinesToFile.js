const { deepStrictEqual } = require('assert')
const fs = require('fs')

function writeLinesToFile(path, lines) {
  const fd = fs.openSync(path, 'w')
  lines.forEach(line => {
    fs.writeFileSync(fd, `${line}\r\n`)
  })
  fs.closeSync(fd)
}

module.exports = writeLinesToFile