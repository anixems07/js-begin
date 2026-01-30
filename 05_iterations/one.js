// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);   
// }

let myArray = [10, 20, 30, 40, 50];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray [i];
    //console.log(element); 
}

// break and continue

// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is: ${index}`);  
// }

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is: ${index}`);  
}