const filterPlaylist = require('../src/filterPlaylist')

describe('filterPlaylist #1', () => {
  // 5. for each line in playlist, 
  //  if line ends with .vtt
    // 1. replace (num)_(num).vtt => (num).vtt
    // print updated line
    // store old name & new name in rename_file_list
  // else print line
  const input = [
    '#EXTM3U',
    '#EXT-X-VERSION:3',
    '#EXT-X-TARGETDURATION:4',
    '#EXT-X-MEDIA-SEQUENCE:0'
  ]
  const actual = filterPlaylist(input)

  test('result is not null', () => {
    expect(actual).not.toBeNull()
  })

  test('changes is an array', () => {
    expect(actual.changes).toEqual(expect.any(Array))
  })

  test('finalCopy is an array', () => {
    expect(actual.finalCopy).toEqual(expect.any(Array))
  })  

  test('0 changes found', () => {
    expect(actual.changes.length).toEqual(0)
  }) 

  test('4 line produced', () => {
    expect(actual.finalCopy.length).toEqual(4)
  })    
})