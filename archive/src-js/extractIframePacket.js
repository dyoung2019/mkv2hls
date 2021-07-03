const extractNumber = (value, field) => {
  return value.substring(field.length)
}

function extractIframePacket(value) {
  
  const tokens = value.split('|')
  const TIME_FIELD = 'pkt_pts_time='
  const SIZE_FIELD = 'pkt_size='
  const POS_FIELD = 'pkt_pos='
  
  const packet = {}
  tokens.forEach(token => {
    if (token.startsWith(TIME_FIELD)) {
      packet.time = extractNumber(token, TIME_FIELD)
    } else if (token.startsWith(SIZE_FIELD)) {
      packet.size = extractNumber(token, SIZE_FIELD)
    } else if (token.startsWith(POS_FIELD)) {
      packet.pos = extractNumber(token, POS_FIELD)
    }
  })

  // console.log('tokens', tokens)
  return packet
}

module.exports = extractIframePacket