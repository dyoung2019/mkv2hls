const getYesOrNo = (flag) => {
  return (flag) ? 'YES' : 'NO'
}

function constructSubtitleLine(entry) {
  const {
    name,
    isDefault,
    isAutoSelect,
    isForced,
    language,
    uri
  } = entry

  const GROUP_ID = "subs"

  const characteristics = (!isForced)
    ? ',CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound"'
    : ''

  return `#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="${GROUP_ID}"` +
        `,NAME="${name}"` +
        `,DEFAULT=${getYesOrNo(isDefault)}` +
        `,AUTOSELECT=${getYesOrNo(isAutoSelect)}` +
        `,FORCED=${getYesOrNo(isForced)}` +
        `,LANGUAGE="${language}"` +
        characteristics +
        `,URI="${uri}"`
}

module.exports = constructSubtitleLine