const path = require('path')

let filePath = path.join(__dirname, 'path_demo.js')

let basename = path.basename(filePath)

let fileExtension = path.extname(filePath)

console.log(basename)