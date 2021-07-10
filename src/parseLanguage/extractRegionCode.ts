export default function extractRegionCode(parts: string[]) {
  const noOfTokens = parts.length
  
  switch(noOfTokens) {
    case 2:
      return parts[1]
    case 3:
      return parts[2]
    default:
      return ''
  }
}
