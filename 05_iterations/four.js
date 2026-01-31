const myObject ={
    js: 'javascript',
    cpp:'C++',
    rb: "ruby",
    bash:"bash"
}

for (const key in myObject) {
    // console.log(`key is ${key} and value is ${myObject[key]}`);
}

const arr1=["js","cpp","rb","bash"]

for (const key in arr1) {
    // console.log(key); //Here only the index number will be printed not he value at the index 'key'
    console.log(arr1[key]);
}