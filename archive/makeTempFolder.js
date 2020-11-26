const fs = require('fs')
const del = require('del')
const path = require('path')

const openShortLivedFolder = require('../src/openShortLivedFolder')

const addDummy = (directory) => {
  const dummyPath = path.join(directory, "dummyPath.txt" )
  const fd = fs.openSync(dummyPath, 'w')
  fs.writeFileSync(fd, '')
  fs.closeSync(fd)
  return 'burger time'
}

openShortLivedFolder('subs-', addDummy)
  .then((output) => {
    console.log('DEL done', output)
  })
  .catch(err => {
    console.error(err)
  })