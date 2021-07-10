import type { RenditionTask } from "../RenditionTask";
import type { ResolveURIFn } from "../ResolveURI";

export default function buildRenditionAndIframeLines(
  resolveURI: ResolveURIFn,
  renditions: RenditionTask[]): string[] {
  const output: string[] = [];
  renditions.forEach(rend => {

    // stream
    const videoLine = '#EXT-X-STREAM-INF:PROGRAM-ID=1'
    output.push(videoLine);
    // iframe
    const iFrameLine = '#EXT-X-I-FRAME-STREAM-INF:PROGRAM-ID=1'
    output.push(iFrameLine);
    // linebreak
    output.push('');
  });
  
  return output;
}