// **44 See it again

function SetUsername(username){
    this.username=username
    console.log("Called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    
    this.email=email;
    this.password=password
}

const check = new createUser("Ahab", "ahab@gg.com","123")
console.log(check);
