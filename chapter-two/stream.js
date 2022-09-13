const fs = require('fs')

const rs = fs.createReadStream('./renamedHello.txt', { encoding: 'utf8' })

const ws = fs.createWriteStream('./newFile.txt')

// rs.on('data', (dataChunk) => ws.write(dataChunk))

//  OR BETTER WAY!


rs.pipe(ws);