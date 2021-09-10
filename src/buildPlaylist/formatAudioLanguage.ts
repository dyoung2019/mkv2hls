export default function formatAudioLanguage(languageCode: string|null) {
  if (!!languageCode) {
    return `,LANGUAGE="${languageCode}"`;
  } else {
    return '';
  }
}