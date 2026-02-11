const myNums=[1,2,3,4,5,6,7,8,9,10];

//map method
// const newNums = myNums.map( (nums)=> nums+10)

const newNums = myNums
                .map( (nums)=> nums*10)
                .map( (nums) => nums+1)
                .filter( (nums) => nums<80)

console.log(newNums);

