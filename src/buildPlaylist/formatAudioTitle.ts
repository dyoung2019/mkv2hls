export default function formatAudioTitle(title: string|null) {
  if (!!title) {
    return `,LANGUAGE="${title}"`;
  } else {
    return '';
  }
}