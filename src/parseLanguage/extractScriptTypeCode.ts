export default function extractScriptTypeCode(parts: string[]) {
  const noOfTokens = parts.length

  switch(noOfTokens) {
    case 3:
      return parts[1]
    default:
      return ''
  }
}