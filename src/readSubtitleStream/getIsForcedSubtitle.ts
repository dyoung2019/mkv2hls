export default function getIsForcedSubtitle(output: SubtitleStream) {
  const flag = output["disposition:forced"];
  return (!!flag && flag === '1'); 
}