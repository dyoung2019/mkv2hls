import parseLanguage from "../parseLanguage/index.js"

export default function generateSubtitleName(language: string|null, isForced: boolean) {
  const langInfo = parseLanguage(language)
  // TODO: what about other language 
  const nameSuffix = isForced ? ' (FORCED)' : ''
  return `${langInfo.name}${nameSuffix}`
}