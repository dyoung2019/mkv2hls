import isGapRequired from "./isGapRequired.js";

export default function getLinebreak(noOfAudioTracks: number): string[] {
  return isGapRequired(noOfAudioTracks) ? [''] : [];
}