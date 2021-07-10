export default function getIsDefaultAudio(output: AudioStream) {
  const flag = output["disposition:default"];
  return (!!flag && flag === '1'); 
}