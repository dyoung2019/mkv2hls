export default function formatAudioLanguage(languageCode: string|null, languageDescription: string|null) {
  if (!!languageCode) {
    return `,LANGUAGE="${languageDescription}"`;
  } else {
    return '';
  }
}