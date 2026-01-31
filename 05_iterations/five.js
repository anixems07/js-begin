const coding=["js","cpp","python","ruby","bash"]

// coding.forEach( function (item) {
//     // console.log(item);
// }  )

// coding.forEach( (item) => {
//     // console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe); //here the reference of printMe is passed

// coding.forEach( (item, index, arr)=> {
//     console.log(item,index, arr); // prints item with their index and also the whole array for each element everytime 
// })

const myCoding= [
    {
        languageName:"javascript",
        fileName: "js"
    },
    {
        languageName:"java",
        fileName: "java"
    },
    {
        languageName:"python",
        fileName: "py"
    }
]

myCoding.forEach( (item)=> {
    
    console.log(item.languageName); 
    console.log(item.fileName); 
})