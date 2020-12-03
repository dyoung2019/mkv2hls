const fs = require('fs')

function writeLinesToFile(path, lines) {
  return new Promise(resolve => {
    const fd = fs.openSync(path, 'w')
    lines.forEach(line => {
      fs.writeFileSync(fd, `${line}\r\n`)
    })
    fs.closeSync(fd)
    resolve()
  })
}

module.exports = writeLinesToFile