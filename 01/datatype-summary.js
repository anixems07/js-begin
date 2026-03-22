//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

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

//-Stack Memory Example
let name="Aniket";

let newName=name
newName="Aniket Kumar";
console.log(name); //Aniket
console.log(newName); //Aniket Kumar
//-Heap Memory Example
let obj1= {
    city: "Kolkata",
}

let obj2=obj1;
obj2.city="Hyderabad"; //As both obj1 and obj2 are referring to same object in heap memory so change will be reflected in both
console.log(obj1.city); //Hyderabad
console.log(obj2.city); //Hyderabad

