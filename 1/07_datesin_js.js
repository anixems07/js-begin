let mydate=new Date();

// console.log(mydate.toString()); // Returns the date in string format
// console.log(mydate.toDateString()); //returns the date portion of a Date object as a string
// console.log(mydate.toJSON()); //JSON.stringify() automatically calls it
// console.log(mydate.toISOString()); //you explicitly ask for an ISO-8601 UTC string
// console.log(mydate.toJSON()===mydate.toISOString()); //true

// let myCreatedDate=new Date(2025, 0, 30) //23rd January 2025
// let myCreatedDate=new Date(2025,0,30,5,30) //30th January 2025 5:30 AM
// let myCreatedDate=new Date("2025-01-30"); //30th January 2025
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now(); //gives the timestamp in milliseconds from 1st January 1970
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //gives the timestamp of that particular date
// console.log(Math.floor(Date.now()/1000)); //gives the timestamp in seconds


// myCreatedDate.getTime()>myTimeStamp?console.log("Future"):console.log("Past");

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMinutes()); //gives the minutes portion of the date
console.log(newDate.getMonth());//gives the month portion of the date (0-11)
console.log(newDate.getDay());//gives the day portion of the date (0-6) 0->Sunday

console.log(newDate.toLocaleString('default',{ weekday:"short",
    year: "2-digit"})); //Sun 26 (current date)




