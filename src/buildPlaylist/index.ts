import type { ConversionTask } from "../ConversionTask"
import type { ResolveURIFn } from "../ResolveURI";
import buildAudioEntries from "./buildAudioEntries.js";
import buildRenditionAndIframeLines from "./buildRenditionAndIframeLines.js";
import buildSubtitleLines from "./buildSubtitleLines.js";
import combinePlaylistLines from "./combinePlaylistLines.js";

export default function buildPlaylist(resolveURI: ResolveURIFn, task: ConversionTask|null) {
  const tracks = (!!task && task.audioTracks) || [];
  const subtitles = (!!task && task.subtitles) || [];
  const renditions = (!!task && task.renditions) || [];

  const audioEntries = buildAudioEntries(resolveURI, tracks);
  const subtitleLines = buildSubtitleLines(resolveURI, subtitles);
  const renditionLines = buildRenditionAndIframeLines(resolveURI, renditions);

  // return combinePlaylistLines([], [], renditionLines);
  return combinePlaylistLines(audioEntries, subtitleLines, renditionLines);
}