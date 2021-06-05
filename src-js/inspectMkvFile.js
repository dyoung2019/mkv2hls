const util = require('util')
const appExec = util.promisify(require('child_process').execFile)

async function inspectMkvFile(videoPath) {
  const applicationName = 'mkvmerge'
  const jsonOutputFlag = '-J'

  const { stdout } = await appExec(applicationName, [jsonOutputFlag, videoPath])
  const data = JSON.parse(stdout)
  return data
}

module.exports = inspectMkvFile