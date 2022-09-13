const fs = require('fs')
const path = require('path')

const fsPromises = require('fs').promises

// fs.readFile('./hello.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// BETTER WAY!

// fs.readFile(path.join(__dirname, 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })


// //  Make a new file
// fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice To Meet You!', (err) => {
//     if (err) throw err;
//     console.log('write complete')
//     //  add new content to a file (update a file) iside the callback
//     fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nNew Content', (err) => {
//         if (err) throw err;
//         console.log('append complete')
//     })
// })


// no need to make it a callback hell!
// we have an async way!

// const fileOps = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, 'hello.txt'), 'utf8') // no need for the callback function cuase we are using try/catch!
//         await fsPromises.unlink(path.join(__dirname, 'hello.txt'))
//         await fsPromises.writeFile(path.join(__dirname, 'newHello.txt'), data)
//         await fsPromises.appendFile(path.join(__dirname, 'newHello.txt'), '\n\nNice to meet you!')
//         await fsPromises.rename(path.join(__dirname, 'newHello.txt'), path.join(__dirname, 'renamedHello.txt'))
//         const newData = await fsPromises.readFile(path.join(__dirname, 'renamedHello.txt'), 'utf8')
//         console.log(newData)
//     } catch (err) {
//         console.error(err)
//     }
// }

// fileOps()




// exit and get uncaught Errors!  => NodeJs docs recommendation

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err);
    process.exit(1); // mandatory (as per the Node.js docs)
});