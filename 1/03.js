let score="33abc"

// console.log(typeof (score)); // o/p string

let valNumber=Number(score); //here the datatype conversion is done
// console.log(typeof (valNumber)); // o/p number
// console.log(valNumber); //this is not a number so it will give NaN when score = 33abc
                        //if score = 33 then it will give 33 as output

  // "33abc" => NaN
  // null => 0
  // true => 1

  let isLoggedIn= ""
  console.log(Boolean(isLoggedIn)); 

  // "" => false
  // "Aniket" => true
  // 0 => false
  // 33 => true 