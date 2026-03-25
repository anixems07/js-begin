const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") //Returns the property descriptor object of the PI property from Math object

// console.log(descriptor);


// console.log(Math.PI);

const courses = {
    name: 'Javascript',
    price: '299',
    isAvailable : true,

    bookCourse: function() {
      console.log("Done !");
      
    }
}

console.log(Object.getOwnPropertyDescriptor(courses, "name")); /*O/P:
{
  value: 'Javascript',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(courses, "name",{
    writable: false,
    enumerable : true,
    
})
console.log(Object.getOwnPropertyDescriptor(courses, "name")); /* O/P: {
  value: 'Javascript',
  writable: false,
  enumerable: false,
  configurable: true
} */

for (const [key, value] of /*courses*/ Object.entries(courses)) {
 if(typeof value !== 'function'){ //this condition reduces the pressure built by the bookCourse property which has an function in it.
  console.log((`${key} : ${value}`));
} 
}

