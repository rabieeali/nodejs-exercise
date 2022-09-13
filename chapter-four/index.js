const logEvents = require('../chapter-three/logEvents')

const EventEmitter = require('events')


class MyEmmiter extends EventEmitter { };



// initialize object
const myEmmiter = new MyEmmiter()

// add a listener for logs
myEmmiter.on('log', (msg) => logEvents(msg))

