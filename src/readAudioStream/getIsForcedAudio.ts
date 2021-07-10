export default function getIsForcedAudio(output: AudioStream) {
  const flag = output["disposition:forced"];
  return (!!flag && flag === '1'); 
}