const score=400
//console.log(score);

const balance= new Number(100)
//console.log(balance);  //Number Object Output: [Number: 100]
//console.log(balance.toFixed(2)); //100.00

const num1= 1234.789
//console.log(num1.toPrecision(5)); //1234.8
//console.log(num1.toPrecision(3)); //1.23e+3

const num2=10000000
//console.log(num2.toLocaleString('en-IN')); //1,00,00,000 --> Indian Numbering System

//-------------------------MATHS------------------------------------------------------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.min(0,150,30,20,-8,-200));

console.log(Math.random()); //gives random number between 0 to 1
console.log((Math.random()*10)+1); //gives random number between 1 to 10 and avoids 0 in cases of 0.001
console.log(Math.floor((Math.random()*10)+1)); //gives random integer between 1 to 10

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min); //gives random integer between min to max (both inclusive)



