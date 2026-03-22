class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const user2=new User("Ahab")
console.log(user2.createId())