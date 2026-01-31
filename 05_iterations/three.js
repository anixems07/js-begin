// for of loop

const arr=["js","cpp","rb","bash"]

for (const num of arr) {
    console.log(num); //it directly gives the value at index 'num'
}

// const greetings="Hello World!"
for (const greet of greetings) {
    // console.log(`Each charater is ${greet}`); 
}

//Maps

const map = new Map()
map.set('1st',"Jan")
map.set('2nd',"Feb")
map.set('3rd',"Mar")
map.set('4th',"Apr")

// console.log(map);

for (const key of map) {
    console.log(`${key}`)
}

for (const [key,value] of map) {
    // console.log(`${key} --> ${value}`)
}

const myObj={
   ' WB': "Kolkata",
    'Tamilnadu': "Chennai"
}

for (const key of myObj) {
    console.log(key);
}

//Objects cannot be iterated using For of loops but maps can be