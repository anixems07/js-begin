// Array, function,String --> Object --> null

let myCourse = "Javascript    "

// console.log(myCourse.length);


let courses=["python","js"]

let coursePrice = {
    python: "99",
    js: "299",
    
    getjsDetail: function(){
        console.log(`Price of JS course is ${this.js}`);
        
    }
}

Object.prototype.java =function(){ //this creates a 'java' Property inside the OBJECT i.e. it will present in every user-created object as everything goes through Object
    console.log(`Java is present in all object`);
    
}

Array.prototype.ak = function(){
    console.log(`Hey AK`);
    
}

// courses.ak(); //Array has the ak property
courses.java() //coz array also goes through object and then to null
coursePrice.java();
// coursePrice.ak(); //This woont work as the ak property is there only for the array part not for others

//INHERITANCE

const User = {
    username:"js",
    email: "js@google.com"
}

const Teacher= {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false,
    checkAvail : function(){
        console.log(`No not Available`);
        
    }
}

const scholars ={
    checkPaper: true,
    fullTime: true,
    // __proto__: TeachingSupport //here, it also has the properties of TeachingSupport Object
}

Teacher.__proto__= User //Now it also has th eproperties of User Object

// MOdern Approach
Object.setPrototypeOf(scholars,TeachingSupport) //Here TeachingSupport can access properties of scholars
//Above is equal to => scholars.__proto__=Teachingsupport


// TeachingSupport.checkAvail();
// scholars.checkAvail();

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The length is ${this.trim().length}`);
    
}

"Aniket   ".trueLength();
"Ahab  ".trueLength();