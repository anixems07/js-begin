const state=["Telangana","Assam","UP"]
const city=["Hyderabad","Guwahati","Lucknow"]

// state.push(city) //it add the element of the city into the state array and the state array is changed

//console.log(state); //[ 'Telangana', 'Assam', 'UP', [ 'Hyderabad', 'Guwahati', 'Lucknow' ] ]
//console.log(state[3]); //[ 'Hyderabad', 'Guwahati', 'Lucknow' ]
//console.log(state[3][1]); //Guwahati

const combine=state.concat(city) //concat method is used to combine two arrays and it does not change the existing arrays
// console.log(combine); //[ 'Telangana', 'Assam', 'UP', 'Hyderabad', 'Guwahati', 'Lucknow' ]

const all_places=[...state,...city] //spread operator is also used to combine two arrays and it does not change the existing arrays
// console.log(all_places);

const arr1=[1,2,3,[4,5],6,[7,8,[9,10]]];
const flat_arr = arr1.flat(1)
// console.log(flat_arr); //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ] flattend by 1 level

console.log(Array.from("Aniket"));//[ 'A', 'n', 'i', 'k', 'e', 't' ] converts string to array
console.log(Array.from({name:"Aniket"})); //[] it gives empty array as it is not mentioned that the keys or specifically the values need to be coverted.

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ] creates array from the given values

