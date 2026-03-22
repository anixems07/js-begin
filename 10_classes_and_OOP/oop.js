const user = {
    username: "Aniket",
    loginCount : 8,
    signedIn: true,

    getDetails: function(){
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.getDetails());
// console.log(this); --> {}

function userJS(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting =function(){
        console.log(`Welcome ${this.username}`);
        
    }
    
    // return this
}

const userOne = new userJS("Aniket" , 3, true);
const userTwo = new userJS("Ahab" , 5, false);
console.log(userOne.constructor);
// console.log(userTwo);
//NEW KEYWORD
//Step-1 : Empty Object is Created i.e. Instance
//Step-2 : Constructor function is called due to the new keyword
//Step-3 : This Keyword injects and packs all the argument and returned when function is called
// If 'new' keyword is not used then userTwo value overwrite the value of the userOne and if new kwyword is used then new instance of the function is made or a new copy of the function is made hence it does not affect each other.
// new always returns 'this' even if return this is not written then also
// # instanceof operator #