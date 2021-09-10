export default function formatName(
  overrideDescription: string,
  scriptTypeKey: string,
  internationalLanguageName: string,
  scriptTypeFormatted: string,
  regionFormatted: string,
  regionValue: string|null,
  languageFormatted: string,
) {
  // 1. use alternative description if found
  const fullDescription =
    overrideDescription // ignore script
    || !!scriptTypeKey && `${internationalLanguageName} ${scriptTypeFormatted} ${regionFormatted}` // plain text
    || !!regionValue && `${languageFormatted} ${regionFormatted}` // code 
    || languageFormatted // found on iso 649

  return fullDescription;
}