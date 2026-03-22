// array

const myArr=[0,1,2,3,4,5,6]
const str=["Ak","An","As","At"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(str);
// console.log(myArr[0]);

//--Array Methods--

myArr.push(11) //add element at end
myArr.pop() //remove element from end
myArr.unshift(-1) //add element at start
myArr.shift() //remove element from start

// console.log(myArr.indexOf(8)); //return -1 if not found else index

const nArr=myArr.join("-") //convert array to string with separator
// console.log(nArr); //0-1-2-3-5-7-9

//SLICE and SPLICE
console.log("A ",myArr);

const myn1=myArr.slice(2,4) //extract a section of array 4th index not included
console.log(myn1); // [ 2, 3 ]
console.log("B ",myArr);

const myn2=myArr.splice(2,4) //extract a section of array 4th index included and remove from original array
// splice(2,4) start at index 2, and remove 4 elements

console.log(myn2); // [ 2, 3, 4, 5 ]
console.log("c ",myArr); // c [ 0, 1, 6 ]



