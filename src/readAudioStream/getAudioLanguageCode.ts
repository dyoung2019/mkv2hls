export default function getAudioLangaugeCode(output: AudioStream) {
  const language = output["tag:language"];
  return !!language && language || null;
}