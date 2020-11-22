
function constructAudioLine(params) {
  const uriClause = params.uri !== undefined
    ? `,URI="${params.uri}"` 
    : ''

  return `#EXT-X-MEDIA:TYPE=AUDIO,` +  
         `GROUP-ID="audio"` +
         `,LANGUAGE="${params.language}"` +
         `,NAME="${params.name}"` +
         `,AUTOSELECT=${params.autoSelect ? 'YES' : 'NO' }` +
         `,DEFAULT=${params.default ? 'YES' : 'NO' }`  
         + uriClause       
}

module.exports = constructAudioLine