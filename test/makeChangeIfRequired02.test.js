const makeChangeIfRequired = require('../src/makeChangeIfRequired')

describe('makeChangeIfRequired #2', () => {
  const actual = makeChangeIfRequired('#EXTINF:4.000000')
  test('does not return a change', () => {
    expect(actual).toBeNull()
  })   
})