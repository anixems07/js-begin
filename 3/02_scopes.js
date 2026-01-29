let a=10
const b=20
// var c=30 // one should avoid var because it remains intact even outside of its scope

if(true){
    let a=40
    const b=30
    // var c=50
}

// console.log(a);
// console.log(b);
// console.log(c); //50

function one(){
    const username="User1"

    function two(){
        const pass="password123"
        console.log(username);
        
    }
    // console.log(pass); 

    two();
}

// one()

if(true) {
    const username="User2 "
    if(username==="User2 "){
        const website="example.com"
        console.log(username+website);
    }
    //  console.log(website);
}
// console.log(username)

//------------------------------------------------------------------------------

// console.log(addone(2)) // works due to hoisting (function declared normally)
function addone(num){
    return num+1
}

addone(2)

// console.log(addTwo(3)) // does not work due to no hoisting (function declared as expression)
const addTwo= function(num){
    return num+2
}

addTwo(3)