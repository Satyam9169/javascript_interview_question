console.log("Local Storage vs Session Storage and cookies");
const setiname = localStorage.setItem("name", "satyam agrahari");
const setAge = localStorage.setItem("age", "22");
const getitem = localStorage.getItem("age");
const getName = localStorage.getItem("name")
// console.log(getName);
// for removing the name from local storage
// const removeItem = localStorage.removeItem("name");
// console.log(removeItem)
// for getting the keys from local storage
// const getKey = localStorage.key(0);
// console.log(getKey);
// for getting the length of local storage
// const getLength = localStorage.length;
// console.log(getLength)

// for clearing the local storage
// const clear = localStorage.clear();
// console.log(clear);

let arr = [1,2,3,4,5,6,7,8,9,10];
// for storing the array in local storage
localStorage.setItem("arr", JSON.stringify(arr));
// for getting the array from local storage
let getArr = JSON.parse(localStorage.getItem("arr"));
console.log(getArr)