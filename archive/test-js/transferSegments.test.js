const fs = require('fs')
const { string } = require('yargs')
const transferSegments = require('../src/transferSegments')

jest.mock('fs')
jest.unmock('path')

describe('transferSegments test cases', () => {

  const callback = jest.fn()

  const changes = [
    { original: '001_1.vtt', updated: '001.vtt' },
    // { original: '002_2.vtt', updated: '002.vtt' }
  ]
  const srcPath = '/a'
  const dstPath = '/b'

  describe('call #1', () => {
    const getFirstCall = async () => {
      await transferSegments(changes, srcPath, dstPath, callback)
    }

    test('src', async () => {
      getFirstCall()
      expect(callback).toBeCalledWith('/a/001_1.vtt', '/b/001.vtt');
    }) 
  })   
})