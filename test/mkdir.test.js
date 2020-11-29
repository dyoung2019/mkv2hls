// __tests__/FileSummarizer-test.js
'use strict';

jest.mock('fs');

describe('mkdir tests', () => {
  const MOCK_FILE_INFO = {
    'a/file1.js': 'console.log("file1 contents");',
    'b/file2.txt': 'file2 contents',
  };

  beforeEach(() => {
    // Set up some mocked out file info before each test
    require('fs').__setMockFiles(MOCK_FILE_INFO)
  });

  test('no errors when dir doesnt exists', () => {
    const fs = require('fs')

    const callback = (error) => {
      expect(error).toBeUndefined()
    }

    fs.mkdir('c', callback)
  });

  it('error raised', () => {
    const fs = require('fs')

    const callback = (error) => {
      expect(error).toEqual(expect.any(Error))
    }

    fs.mkdir('a', callback)
  });  

  test('error raised with options.recursive=false', () => {
    const fs = require('fs')

    const callback = (error) => {
      expect(error).toEqual(expect.any(Error))
    }

    fs.mkdir('a', { recursive: false }, callback)
  }); 
  
  test('no error raised with options.recursive=true', () => {
    const fs = require('fs')

    const callback = (error) => {
      expect(error).toBeUndefined()
    }

    fs.mkdir('a', { recursive: true }, callback)
  });  

  test('no errors when dir doesnt exists + options.recursive=true', () => {
    const fs = require('fs')

    const callback = (error) => {
      expect(error).toBeUndefined()
    }

    fs.mkdir('c', { recursive: true },  callback)
  });  

  test('no errors when dir doesnt exists + options.recursive=false', () => {
    const fs = require('fs')

    const callback = (error) => {
      expect(error).toBeUndefined()
    }

    fs.mkdir('c', { recursive: false },  callback)
  });   
});
