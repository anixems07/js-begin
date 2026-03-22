class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`New course is added by ${this.username}`);
        
    }
}

const newTeacher = new Teacher("ahab","abc@gg.com","abc");

console.log(newTeacher);
newTeacher.addCourse();

const user2= new User("Ak")
user2.logMe();

console.log(newTeacher instanceof Teacher);

