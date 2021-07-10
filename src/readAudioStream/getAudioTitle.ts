export default function getAudioTitle(output: AudioStream) {
  const title = output["tag:title"];
  return !!title && title || null;
}