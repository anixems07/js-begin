"use strict"; //treat all js code as newer version

// alert(3+3) //we are using nodejs, not browser so it will show error bt if ran in console it would give a pop up of '6'

let name="Aniket"
let age= 20
let isLoggedIn= false
let state  // This is undefined as variable has been declared but no value has been assigned

//data types:
//number => 2 to power 53
// bigint
//string
//boolean
//null => standalone value
//undefined 
//symbol => unique

//object

console.log(typeof null); //object
console.log(typeof undefined); //undefined

const accId=122345
let accEmail="abc@c.com"
var accPass=12345
let accState; //this is undefined as no value is given to this
//var is not used nowadays because of issue in block scope("{}>") and functional scope

//  accCity="Kolkata" //this is undefined 

// accId= 2 //not allowed

accEmail="db@nm,com"

console.log(accId);
console.table([accEmail,accPass,accId,accState]);