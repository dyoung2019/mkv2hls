// __mocks__/fs.js
// https://jestjs.io/docs/en/manual-mocks
'use strict';

const path = require('path');

const fs = jest.createMockFromModule('fs');

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let mockFiles = Object.create(null);
function __setMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));
  }
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
function readdirSync(directoryPath) {
  return mockFiles[directoryPath] || [];
}

function mkdir(path, ) { 
  const dir = path
  const callback = (arguments.length === 2) ? arguments[1] : arguments[2]
  const options = (arguments.length >= 3) ? arguments[1] : { recursive: false, mode: 0o777}

  const createDirectoryEntry = (path) => {
    mockFiles[path] = []
  }
  
  const isRecursive = options && options.recursive || false
  // const dirMode = options && options.mode || 0o777

  const isDirectoryFound = !!mockFiles[dir]

  if (!isDirectoryFound) {
    createDirectoryEntry(dir)
  } 
  
  if (isDirectoryFound && !isRecursive) {
    callback(new Error())
  } else {
    callback()
  }
}

fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;
fs.mkdir = mkdir;

module.exports = fs;
