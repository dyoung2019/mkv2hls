const fs = require('fs')

fs.copyFileSync('./deploy/package-cjs.json', "./dist/package.json")