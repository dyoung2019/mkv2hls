import getLinebreak from './getLinebreak.js';

export default function prependLinebreak(count: number, items: any[]) {
  const firstLinebreak = getLinebreak(count);
  return [ ...firstLinebreak, ...items];
}