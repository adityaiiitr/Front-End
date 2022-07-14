/*
console.log("Hello I am from Pluto")

import myOS from 'os'
console.log(myOS.freemem())
console.log(myOS.hostname())
console.log(myOS.arch())
console.log(myOS.platform())
console.log(myOS.totalmem())

import myFS from 'fs'
myFS.writeFileSync('myText.txt', 'Hey I am from Earth')



let a = myFS.readFileSync('myText.txt')
console.log(a) 
*/

// import myhttp from 'http'
// myhttp.createServer((request, response) => {
//     response.write('Hey I am a Message from Server')
//     response.end()
// }).listen(3000)


/*
//ES5 Reading
var user = require('./arithematic')
console.log(user.myAdd(1, 2))
console.log(user.mySub(1, 2))
*/

import myChalk from 'chalk'
console.log("Hello")
console.log(myChalk.bgCyan("Hello"))
console.log(myChalk.red("Hello"))