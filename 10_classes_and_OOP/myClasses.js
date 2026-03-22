// ES6

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    chnageUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("Ahab","abac@hmail.com","abc");

console.log(user1.encryptPassword());
console.log(user1.chnageUsername());

//
