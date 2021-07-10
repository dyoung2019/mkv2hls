import beginTag from "./beginTag.js";

type StringArray = string[];

export default function combinePlaylistLines(
  audios: StringArray,
  subtitles: StringArray,
  renditions: StringArray
): string[] {
  return [beginTag(),  ...audios, ...subtitles, ...renditions];
}