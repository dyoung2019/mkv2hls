const openShortLivedFolder = require('./openShortLivedFolder')
const extractEachSubtitle = require('./extractEachSubtitle')

function extractAllSubtitles(jobParams, videoInfo) {

  const tasks = videoInfo.subtitles.map(sub => {
    const extractInfo = {
      video: jobParams,
      track: sub,
    }

    return openShortLivedFolder('subs-', extractEachSubtitle, extractInfo)
  })

  return Promise.all(tasks)
    .then(() => {
      return videoInfo
    })
}

module.exports = extractAllSubtitles