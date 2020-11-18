
function constructAudioLine(params) {
  const uriClause = params.uri !== undefined
    ? `,URI="${params.uri}"` 
    : ''

  return `#EXT-X-MEDIA:TYPE=AUDIO,` +  
         `GROUP-ID="audio"` +
         `,LANGUAGE="${params.language}"` +
         `,AUTOSELECT=${params.autoSelect ? 'YES' : 'NO' }` +
         `,DEFAULT=${params.default ? 'YES' : 'NO' }`  
         + uriClause       
}

module.exports = constructAudioLine