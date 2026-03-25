class User{
    constructor(email, password) {
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
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
