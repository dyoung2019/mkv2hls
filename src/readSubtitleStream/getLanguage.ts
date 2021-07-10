export default function getLanguage(output: SubtitleStream) {
  const languageCode = output["tag:language"];
  return languageCode || null;
}