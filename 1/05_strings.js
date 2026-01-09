const name="Aniket";
const rollNo=101;

// console.log(name+rollNo); //In today's time this is not a good practice.
//console.log(`Hello my name is ${name} and roll no. is ${rollNo}`); //Using Template Literals (ES6 feature)

const gameName= new String('Cricket'); //String Object
//Here string is an object which act as a key value pair i.e. index and character at that index.
//console.log(gameName[0]); //C
//console.log(gameName.length); //7
//console.log(gameName.toUpperCase()); //CRICKET

//console.log(gameName.indexOf('t')); //6

const newString= gameName.slice(-6,3); //Cri
//console.log(newString); //ri

const url="https://aniket.com/anixems%20profile";
console.log(url.replace('%20','-')); //https://aniket.com/anixems-profile

console.log(url.includes('aniket')); //true

console.log(url.italics());

console.log(gameName.slice(-5,4));//ic --> negative length is total length - given negative index; here it is 7-5=2 to 4 index.


