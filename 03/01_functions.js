function name() {
    console.log("Javascript"); 
}

// name; //--> This is Reference
name(); //-->This is Excution

// function add(num1,num2) {
//     console.log(num1+num2);
// }
// add(2,3); //5
// add(2,"a"); //2a

function add(num1,num2) {
    return (num1+num2);
}

const result = add(5,7);
// console.log("RESULT:",result);

// ""-->is false value 
// undefined-->is false value

function loginUserMessage(username) {
    // if(username===undefined)
    if(!username)
        {
        console.log("Enter your name");
        return
    }
    return `${username} just Logged in`
}

// console.log(loginUserMessage("john"));
// function(); -->while calling if no value inside the argument then it is undefined
// console.log(loginUserMessage()); // undefined just Logged in

function calculateCartPrice(val1,val2,...prices) { //-->val1=200,val2=400 rest prices=[500,600,5000]
    console.log("val1", val1);
    
    return prices;
}

// console.log(calculateCartPrice(200,400,500,600,5000));

const user={
    username:"John",
    age:30
}

function printObjectDetails(AnyObject) {
    console.log(`username is ${AnyObject.username} and age is ${AnyObject.age}`);
}

printObjectDetails(user);

const MyArray=[10,20,30,40,50];
function printArrayValue(AnyArray){
    return AnyArray[1];
}

console.log(printArrayValue(MyArray));

