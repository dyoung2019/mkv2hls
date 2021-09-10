export default function generateSubtitleName(language: string|null, isForced: boolean) {
  // const langInfo = parseLanguage(language)
  // TODO: what about other language 
  const nameSuffix = isForced ? ' (FORCED)' : ''
  return `${language}${nameSuffix}`
}