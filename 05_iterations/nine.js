const myNums=[1,2,3]

// const newNums= myNums.reduce(function (acc, curr_val){
//     console.log(`acc value: ${acc} and current value is: ${curr_val}`);
    
//     return acc+curr_val
// }, 0) // 0 is the initial value of acc

//now using the callback function 

const newNums= myNums.reduce( (acc, curr_val) => acc+curr_val,0) // 0 is the initial value of acc

// console.log(newNums);

//accumalator takes the initial vlaue then it keeps adding up with the current value and updates its own value.
// initial_val = acc then acc = acc + curr_val

const shoppingCart = [
    {
        itemname:"js course",
        price: 299
    },
    {
        itemname:"cybersec course",
        price: 2999
    },
    {
        itemname:"CCNA course",
        price: 5999
    },
    {
        itemname:"crypto course",
        price: 3999
    },
]

const totalPrice= shoppingCart.reduce( (acc, prices) => (acc+prices.price),0);

console.log(totalPrice);

