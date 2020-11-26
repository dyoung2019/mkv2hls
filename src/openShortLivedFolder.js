const del = require('del')
const fs = require('fs')

// fleeting temp folder with auto cleanup
const openShortLivedFolder = async (prefix, cb, delOptions = {}) => {
  const tempDirectory = await fs.promises.mkdtemp(prefix)
  // console.log(directory)
  return new Promise(resolve => {
    const output = cb(tempDirectory)
    resolve(output)
  })
  // CLEANUP if valid
  .finally(() => {
    // console.log('DELETING')
    return del(tempDirectory, delOptions)
  })
}

module.exports = openShortLivedFolder