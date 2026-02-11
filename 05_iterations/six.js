// const coding=["js","cpp","python","ruby","bash"]

// const values= coding.forEach( (item) => {
//     console.log(item);
//     return item; // forEach does not return anything, even if return is used...the exact value of values will be undefined
// })

// console.log(values); // undefined


const MyNum=[1,2,3,4,5,6,7,8,9,10]

// const newNums=MyNum.filter( (num) => (num>5) ) //filters returns value an array of values satisfying the condition in the callback function
// console.log(newNums);

//if we use {} operator in the callback function, we need to use return statement to return the value.

// newNums=[]

// MyNum.forEach( (num) => {
//     if (num>6) {
//         newNums.push(num);
//     }
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks= books.filter ( (bk) => {
    return bk.genre==='Non-Fiction' && bk.publish>1985;
  })

  console.log(userBooks);
  