// Immediately Invoked Function Expression (IIFE)
/* Functions that are executed right after they are defined 
   They are used to avoid polluting the global scope */

//()() --> first () is a block and it defines the function, second () invokes it

(function one(){
    //named IIFE
    console.log(`DB CONNECTED`);    
})(); //--> Here ; is ued to end the context of the invoked function

( () => {
    console.log(`DB2 CONNECTED`);   
})();

( (name) => {
    console.log(`DB3 CONNECTED ${name}`);   
})("User1");