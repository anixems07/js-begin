class User{
    constructor(email, password) {
        this.email=email //setter method triggers here
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

// Here email is just a controlled interface, _email is the actual storage

    set email(value){
        // this.email= value  //Setter calls itself → crash (stack overflow)
        this._email = value
    }

    get password(){
        return `protected`
    }

    set password(value){
        this._password = value //never returns anything as it only sets the things
    }
}

const ak = new User("ak@gmail.com", "abc")
console.log(ak.password);
console.log(ak.email);
