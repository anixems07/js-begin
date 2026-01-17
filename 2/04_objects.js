// const InstaUser= new Object() //creating object using object constructor
const InstaUser={}

InstaUser.name="John"
InstaUser.id="john_123"
InstaUser.LoggedIn=false
// console.log(InstaUser); //{ name: 'John', id: 'john_123', LoggedIn: false }

const regularuser={
    fullname:{
        userfullname:{
            firstname:"john",
            lastname:"Snow"
        }
    }
}

// console.log(regularuser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// => const obj3=Object.assign(target_object,source_objects)
//const obj3=Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//const obj3={...obj1,...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

const user=[
    {userId:1,username:"john_123"},
    {userId:2,username:"john_234"},
    {userId:3,username:"john_345"}
]

user[1].userId;
console.log(InstaUser);

console.log(Object.keys(InstaUser)); //[ 'name', 'id', 'LoggedIn' ]-->array of keys
console.log(Object.values(InstaUser)); //[ 'John', 'john_123', false ]-->array of values
console.log(Object.entries(InstaUser)); // [ [ 'name', 'John' ], [ 'id', 'john_123' ], [ 'LoggedIn', false ] ]-->array of key value pairs

console.log(InstaUser.hasOwnProperty("LoggedIn")); //true
