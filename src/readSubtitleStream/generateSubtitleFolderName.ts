export default function generateSubtitleFolderName(
  languageCode: string|null,
  subtitleIndex: number
  ) {
  if (languageCode === null) {
    return `subs_${subtitleIndex.toString(10)}`;
  } else {
    return `subs_${subtitleIndex.toString(10)}_${languageCode}`;
  }

}