export default function getIsDefaultTrack(output: SubtitleStream) {
  const flag = output["disposition:default"];
  return (!!flag && flag === '1'); 
}