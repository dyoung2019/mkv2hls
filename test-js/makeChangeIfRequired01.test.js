const makeChangeIfRequired = require('../src/makeChangeIfRequired')

describe('makeChangeIfRequired #1', () => {
  const actual = makeChangeIfRequired('0006_6.vtt')
  test('returns a change', () => {
    expect(actual).not.toBeNull()
  })   
})