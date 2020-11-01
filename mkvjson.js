const util = require('util')
const appExec = util.promisify(require('child_process').execFile)

async function inspectMkvFile(videoPath) {
  const applicationName = 'mkvmerge'
  const jsonOutputFlag = '-J'

  const { stdout } = await appExec(applicationName, [jsonOutputFlag, videoPath])
  const data = JSON.parse(stdout)
  return data
}

inspectMkvFile('test5.mkv')
  .then(data => {
    if (data.errors.length !== 0) {
      console.error('mkvjson INTERNAL - ' + data.errors)
    } else {
      data.tracks.forEach(track => {
        console.log(`track ${track.id}`)
        console.log('+ properties', track.properties)
        // console.log(` + type  ${track.type}`)
        // console.log(` + name  ${track.properties.track_name || "<name missing>" }`)
        // console.log(` + language ${track.properties.language || "<language missing>"}`)
      })
    }
    return ''
  })
  .catch(err => {
    console.error('mkvjson - ' + err)
  })