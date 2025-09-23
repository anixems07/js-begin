//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') //unique assigned to id
const anotherId = Symbol('123') //unique assigned to anotherId

// console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// *********Memory Allocation**********

//Stack(Primitive)--> a copy of the original value is sent while working in this memory. 
                    //No changes in the original

//Heap(Non-Primitive)--> a reference to the original is sent in this memory.
