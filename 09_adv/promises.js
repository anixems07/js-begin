const promiseOne = new Promise(function(resolve, reject){ //ptomise function canhave only two parts function(resolve, reject)
    // Do an assync task
    // DB calls, cryptography, network
    // Promise is an OBJECT
    setTimeout(function(){
        console.log('Assyn Task is complete');  
        resolve() 
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Assync Task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Task 2 is complete");
})

const PromiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Aniket", email: "example@gmial.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Aniket", pwd :"123"})
        } else {
            reject('ERROR: Something Went Wrong!')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username  
}).then((myusername) => {
    console.log(myusername);
}).catch(function(error){
    console.log(error);
}).finally( () => console.log("The Promise is either resolved or rejected."))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){    
    let error = true
        if(!error){
            resolve({username:"javascript", pwd :"123"})
        } else {
            reject('ERROR: Not Found!')
        }
},1000)
});

async function consumePromiseFive(){
   try {
     const response = await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error); 
   }
}

consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/anixems07');
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Problem: ", error); 
    }
}

getAllUsers()

fetch('https://api.github.com/users/anixems07')
.then( (response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)); // this gets executed first as fetch special queue unlike other web API's queue i.e. Microtask Queue or priority Queue and gets send to call stack early
