// A callback function is a function passed into another function as
// an argument, which is then invoked inside the outer function to
// complete some kind of routine or action.

// example
// function greet(name){
//   alert('Hello ' + ' : ' + name)
// }

// function userExperience(callback){
//   const name = prompt(`Please Enter your name : `)
//   callback(name)
// }

// userExperience(greet)

//example
// const sum = (a, b) => a + b;
// const result = (a, b, callback) => callback(a, b);
// console.log(result(5, 3, sum))

// example
// function name(params) {
//     console.log('Hi');
// }
// setTimeout(name(), 1000)

// example

// function attachEventListerns(){
//     let count = 0;
//     document.getElementById("btn").addEventListener('click', ()=>{
//         console.log('button clicked', ++count);
//     })
// }

// attachEventListerns()

// 2nd example
// const calculation = (a, b, operation) => {
//     return operation(a, b);
// }

// const addition = calculation(2, 3, function (a, b) {
//     return a + b;
// })

// console.log(addition);

// const substraction = (a, b) => a - b;
// const subResult = calculation(18, 3, substraction);
// console.log(subResult);

// const multiply = (a, b) =>{
//     return a * b;
// }

// const multiplyResult = calculation(5, 2, multiply);
// console.log(multiplyResult);

// with setTimeout
// setTimeout(()=> {
//     console.log('calling after 2 second');
// }, 2000)

// with forEach
// const number = [1,2,3,4,5];
// number.forEach(item =>{
//     console.log(item * 2);
// })
