export default function generateURI(resolveUri: (end:string) => string, path:string) {
  return resolveUri(path);
}

