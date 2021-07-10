import type { RenditionTask } from "../RenditionTask.js";
import getIframesPlaylistURI from "./getIframesPlaylistURI.js";
import getRenditionPlaylistURI from "./getRenditionPlaylistURI.js";

export default function prepareRendition(rendition: RenditionInfo): RenditionTask {
  const iframesPlaylistURI = getIframesPlaylistURI(rendition.prefix)
  const playlistURI = getRenditionPlaylistURI(rendition.prefix)

  return {
    // prefix: rendition.prefix,
    // containerWidth: rendition.containerWidth,
    // containerHeight: rendition.containerHeight,
    // videoBitrate: rendition.videoBitrate,
    // audioBitrate: rendition.audioBitrate,
    ...rendition,
    playlistURI,
    // playlistFilePath: resolveFolderPath(outputFolder, playlistURI),
    iframesPlaylistURI,
    // iframesPlaylistFilePath: resolveFolderPath(outputFolder, iframesPlaylistURI)
  }
}