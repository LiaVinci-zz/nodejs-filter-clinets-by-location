// Node Requires
const fs = require('fs')
const readline = require('readline')

exports.read = (filePath) => {
  return new Promise((resolve, reject) => {
    let lines = []

    fs.stat(filePath, (err, fileInfo) => {
      if (fileInfo && fileInfo.isFile()) {
        readline.createInterface({
          input: fs.createReadStream(filePath),
          crlfDelay: Infinity
        })
        .on('line', (line) => {
          if (line && line.trim().length) {
            lines.push(line)
          }
        })
        .on('close', () => {
          resolve(lines)
        })
      } else {
        reject(`Opps file not found... this is the file path provided: ${filePath}`)
      }
    })
  })
}
