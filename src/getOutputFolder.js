const path = require('path')

function getOutputFolder(params, localFolder) {
  const output = params.output

  return (output !== undefined && output !== null)
    ? (path.isAbsolute(output)) ? output : path.resolve('.', output)
    : localFolder
}

module.exports = getOutputFolder