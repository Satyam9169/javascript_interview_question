
let c = {greeting: "Hey!"};
let d;

d = c;  // we are passing only refence im d not property and object
c.greeting = "Hello";
console.log(d.greeting);






// let user = {
//     name: "Pyush",
//     age: 24,
//     fullName : {
//         first: "Satyam",
//         last: "Agrawal",
//     },
// }

// const name = "Satyam Agrahari"

// const {fullName: {first}, } = user;

// console.log(first);


// let user = {
//     name: "Piyush",
//     age: 24,
// };

// const name = "Satyam Agrahari"

// const {name: myName} = user;

// console.log(myName);





// let nums = {
//     a: 100,
//     b: 200,
//     title: "my nums",
// }

// multiplyByTwo(nums);

// function multiplyByTwo(obj) {
//     for(key in obj){
//         if(typeof obj[key] === "number"){
//             obj[key] *= 2;
//         }
//     }
// }

// console.log(nums);
// let obj = {
//     a: "one",
//     b: "two",
//     c: "three"
// }

// console.log(obj);

// const user = {
//     name: "Satyam agrahari",
//     age: 24,
//     "Hi Dost": true,
// };

// delete user["Hi Dost"];

// for(key in user){
//     console.log(user);
// }