const userEmail = ''

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("No Email Found");
}
    
// falsy vlaues:-
// false, 0, -0, BigInt 0n, "", '', null, undefined, NaN

//truthy values:-
//"0",'false'," ", {}, [] , function(){}, etc

// if(userEmail.length === 0) { //check for empty array
//     console.log("Array is Empty");
// }  

const obj= {}

if(Object.keys(obj).length === 0){  // check for empty object, here keys() method returns an array of object's own property names
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null , undefnined
  //used to differentiate when two values are returned and work accordingly with null and undefined  #26
let val1;
// val1=5 ?? 10 //keeps the values assigned first here 5
// val1=null ?? 10 //keeps the values assigned second here 10
// val1 = undefined ?? 15

console.log(val1);

//Ternary Operator
  //condtion ? true block : false block