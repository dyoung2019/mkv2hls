export default function generateAudioFolderName(
  languageCode: string|null,
  audioIndex: number
  ) {
  if (languageCode === null) {
    return `audio_${audioIndex.toString(10)}`;
  } else {
    return `audio_${audioIndex.toString(10)}_${languageCode}`;
  }
}