export default function formatLanguageDescription(native: string|null, international: string) {
  // prefer language name in native language
  return native || international;
}