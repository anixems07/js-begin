// Javascript has a prorotypal behaviour. It search up all the layers until the information is retrieved or it gets a null value.

function multi5(num){
    return num*5
}

multi5.power= 2

// console.log(multi5(5));
// console.log(multi5.power); // 2
// console.log(multi5.prototype); // {}

// In js function is a Function and also an Object

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    
}

const user1 =new createUser("Ahab", 75)
const user2 =new createUser("Ahana", 45)

user1.increment()
user1.printMe()
// console.log(user1.printMe());
console.log(user1);


//Here new keyword is important as it htelps to bind up the additional user-defined properties such as increment and printMe