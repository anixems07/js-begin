const User = {
    
    _email: 'ak@email.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    }
,
    set email(value){
        this._email= value    }
}

// console.log(User.email);
// console.log(User._email);


const user1 = Object.create(User)
console.log(user1.email);
