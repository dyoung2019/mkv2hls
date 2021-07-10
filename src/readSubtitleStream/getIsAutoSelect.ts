import type { AudioTrack } from "../AudioTrack";

export default function getIsAutoSelect(output: AudioStream) {
  const flag = output["disposition:default"];
  return (!!flag && flag === '1'); 
};