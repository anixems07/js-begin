const user={
    username:"User1",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, WELCOME`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this); //here current context is empty as we are in node environment
                   //in browser it will point to window object as window is the global object in browser

function test(){
    let username="User2"
    // console.log(this.username); //-->undefined as this is not pointing to any OBJECT here
    console.log(this); // not an {}
}
// test()

const testArrow= () => {
    let username="User3 "
    // console.log(this.username); //-->undefined
    console.log(this); //--> {}
}
// testArrow()

// const add= (num1,num2) => {
//     return num1+num2
// }
// const add= (num1,num2) => num1+num2  //implicit return

// const add= (num1,num2) => (num1+num2)

const add= (num1,num2) => ({username:"Sam"}) // returning object | o/p--> { username: 'Sam' } 
console.log(add(3,5));
