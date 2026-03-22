const mySym=Symbol("Key");
const yourSym=Symbol("Key");

const obj={
    [mySym]:"val1", //[] is used to define a symbol key
    [yourSym]:"val2"
}

// console.log(obj[mySym]); // val1

const sym=Symbol("id");
const jsUser={
    name:"Aniket",
    age:"20",
    email:"ak@email,com",
    [sym]:"val3",
    "full name": "Aniket Kumar"
}

console.log(jsUser.name); //This is not the good practice
// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);

// console.log(jsUser);
// Object.freeze(jsUser); //To make object immutable
jsUser.age=21;  //This will not work as object is freezed

jsUser.address= function(){
    console.log("India");  
}
jsUser.addresstwo= function(){
    console.log(`Hello, ${this.name}`);  
}

console.log(jsUser["address"]); //[Function (anonymous)]
console.log(jsUser.address()); //India

console.log(jsUser.addresstwo()); //Hello, Aniket