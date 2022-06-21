// This part is commented
/* This is Multiline Comments */

/*  function abc() {
    

    var a = "Hello I'm from Mars"
    var b = "Hello I'm from Jupiter"
    document.getElementById("myScriptData").innerHTML = a
    document.getElementById("myScriptData1").innerHTML = b
    const c = "hello"
    console.log(c)

}

function abc() {
    let a = 5
    let b = 3
    let c = a & b
    console.log(c) // 1
    console.log(~b) // -4
    console.log(a << 2) // 20
    console.log(a >> 2) // 1
    console.log(a | b) // 7
}

console.log(typeof (1))   //Number
console.log(typeof ("Aditya"))   //String
var c = null
console.log(typeof (c))   //object
let x = 'b'


switch (x) {
    case 'a': console.log("I am case a")
        break
    case 'b': console.log("I am case b")
        break
    case 'c': console.log("I am case c")
        break
    default:
        console.log("Default")
}

for (let i = 0; i < 3; i++) {
    console.log(i)
}

let y = 12

do {
    console.log(y)
    y--
} while (y > 10)

// for in illustration
let object_test = { name: "Aryan", age: 21, salary: 200 }

for (let z in object_test) {
    console.log(z)
    console.log(object_test[z])
}
// for of illustration

let xyz = "I love my country"
for (let z of xyz) { //using z in xyz will give you index position
    console.log(z)
}




function abc() {
    let a = 10
    let b = 20
    console.log(def(a, b))  //call another function with 2 arguments
}

function def(a, b) {
    return a + b
}

function event_onchange() {
    console.log("Hey Im on change")
}

function aaa() {
    console.log("Mouse Enter")
}
function bbb() {
    console.log("Mouse Leaves")
}
*/
function myArray() {
    document.getElementById("myID").value
    let abcd = ["India", "Sri lanka", "China", "Bhutan"]
    console.log(abcd)
    console.log(abcd.length)
    console.log(abcd.toString())

    abcd.shift()
    console.log(abcd)

    abcd.unshift("South Africa")
    console.log(abcd)

    abcd.pop()
    console.log(abcd)

    abcd.push("India")
    console.log(abcd)
    console.log(abcd.slice(1))
    console.log(abcd.slice(2))

}

function myString() {
    let a = "Hey! I'am from Planet Mars"
    console.log(a.length)
    console.log(a)
    let b = " and Pluto"
    console.log(a + b)
    console.log(a.slice(22))
    console.log(a.toUpperCase())
    console.log(a.toLowerCase())
    console.log(a.charAt(4))
    console.log(a.split(" "))
    console.log(a.replace("Mars", "Earth"))

}

function myNumber() {
    let a = 12.5764356
    let b = 12.1764356
    let c = 12
    console.log(a)
    console.log(a.toPrecision(2))
    console.log(b.toPrecision(2))
    console.log(Number.isInteger(a))
    console.log(Number.isInteger(c))
    console.log(Number.isNaN(a))
    console.log(a.toExponential(2))
    console.log(a.toString())
}

function myDate() {
    let a = new Date()
    console.log(a)
    console.log(typeof (a))
    //console.log(Date())
    /*
    console.log(a.getDay())
    a.getHours()
    a.getTime()
    a.getMinutes()
    a.getFullYear()
    a.getTimezoneOffset()
*/
    let z = a.getDate((a.setDate(16)))
    console.log(z)

    //similarly can be done for others

}

function myMath() {
    let a = 5.7798
    console.log(Math.round(a))
    console.log(Math.floor(a))
    console.log(Math.ceil(a))
    console.log(Math.sqrt(a))
    console.log(Math.abs(a))
    console.log(Math.pow(2, 3))

    console.log(Math.max(10, 20, 30, 50, 100))
    console.log(Math.min(10, 20, 30, 50, 100))
    console.log(Math.random() * 6) //output will in range [0,6)
    console.log(Math.ceil(Math.random() * 6)) //[1,6]
}

