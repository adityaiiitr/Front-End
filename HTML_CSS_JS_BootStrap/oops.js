/*
//Single Level Inheritance

class Laptop1 {
    constructor(myWidth1) {
        this.width1 = myWidth1;
    }
    display1() {
        return this.width1
    }
}

class Laptop2 extends Laptop1 {
    constructor(myWidth2) {
        super(myWidth2) // imp line
        this.width2 = myWidth2;
    }
    display2() {
        return this.width2
    }
}
class Laptop3 extends Laptop2 {
    constructor(myWidth3) {
        super(myWidth3)
        this.width3 = myWidth3;
    }
    display3() {
        return this.width2
    }
}

let myObject1 = new Laptop1("From Laptop 1")
let myObject2 = new Laptop2("From Laptop 2")
let myObject3 = new Laptop3("From Laptop 3")
let a = myObject1.display1() //let a = myObject3.display1() or let a = myObject2.display1()
let b = myObject2.display2()
let c = myObject3.display3()
document.getElementById("myId1").innerHTML = a
document.getElementById("myId2").innerHTML = b
document.getElementById("myId3").innerHTML = c

*/




//MAP METHOD
/*
let a = [1, 2, 3, 4, 5]

a.map( //passing the function as argument = callback function
    (item) => ( //function arguments
        console.log(item) //function statement
        //or this line - console.log(item * 5)
    )
)

//method 2 to write the above code
console.log("Method 2 Output")
a.map(myFunction)

function myFunction(item) { //the map method will fetch the item from the array one by one hence th e function should hav a argument
    return console.log(item * 5)
}

//method 3 to write the above code
console.log("Method 3 Output See the screen")
let b = a.map(myFunction)

function myFunction(item) { //the map method will fetch the item from the array one by one hence th e function should hav a argument
    return item * 5
}
document.getElementById("myId").innerHTML = b

*/




/*
//FILTER METHOD
let a = [1, 2, 3, 4, 5]
let b = a.filter(myFunction)

function myFunction(item) {
    return item < 4
}
document.getElementById("myId").innerHTML = b
*/




/*
//REDUCE METHOD
let a = [1, 2, 3, 4, 5]
let b = a.reduce(myFunction)

function myFunction(myReduce, item) {
    return myReduce + item
}
document.getElementById("myId").innerHTML = b
*/

//REDUCE METHOD
let a = [1, 2, 3, 4, 5]
let b = 0
a.forEach(myFunction)

function myFunction(item) {
    b += item + 1
    return item
}

document.getElementById("myId").innerHTML = b