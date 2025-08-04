// Whenwver either empty file index.js or we have to write the code in index.js file
// global space is created
// with the help of window keyword we can access the global space(whatever you js program) in browser


var a = 10; // this is a global variable
function b(){
    var x = 10; // this is a local variable
}
console.log(window.a); // 10
console.log(a)
console.log(this.a); // 10

// This is a global object and window object

// this.a = 5;
// console.log(this.a)
// console.log(this) // because this is target window oject

// 2) 

// let user = {
//     name: 'Piyush',
//     age: 24,
//     getDetails() {
//         console.log(this.name);
//     }
// }

// user.getDetails(); // because it is poiting to parenet object which is user
// output: piyush

// what happen if i have nested object

// let user = {
//         name: 'Piyush',
//         age: 24,
//         childObj:{
//             newName: 'Roadside Coder',
//             getDetails() {
//                 console.log(this.newName, 'and', this.name);
//                 console.log(this)
//             }
//         }
// }
// user.childObj.getDetails()
// because this is depends on immediate parent
// see the output in console


// 3)

// let user = {
//     name: 'satyam',
//     age: 24,
//     getDetails : () =>{
//         console.log(this.name) // nothing will printed
//         console.log(this) // it will printed to window object
//     }
// }

// user.getDetails(); // it is pointing to window object


// 4)
// let user = {
//     name: 'satyam',
//     age: 24,
//     getDetails() {
//         const nestedArrow = () => console.log(this.name)
//         nestedArrow()
//     }
// }
// user.getDetails()

// because it is depending upon the user object but why ?
// because from normal function it is depends upon the
// user object and normal function is inherit to arrow function as well
// so arrow funciton is also depends upon the user object only in this type of question situation

// 5)
// class user{
//     constructor(n){
//         this.name = n;
//     }
//     getName(){
//         console.log(this.name)
//     }
// }

// const User = new user('Piyush');
// User.getName()

// 6) output based
// const user = {
//     firstName: 'Piyush !',
//     getName(){
//         const firstName = 'satyam agrahari !!';
//         return this.firstName;
//     }
// }
// console.log(user.getName())
// piyush
// because normal function is depends upon the user object
// mean immediate parent

// function makeUser(){
//     return {
//         name: 'John',
//         ref: this,
//     }
// }

// let user = makeUser();
// console.log(user.ref.name)
// it will be printed nothing
// because this keyword is depends upon the window object


// make a function that to fix the code that it should 
// printed john
// function makeUser(){
//     return {
//         name: 'John',
//         ref(){
//             return this
//         }
//     }
// }

// let user = makeUser();
// console.log(user.ref().name)

// const user = {
//     name: 'satyam agrahari !',
//     logMessage(){
//         console.log(this.name);
//     },
// }

// setTimeout(user.logMessage,  100)
// it will print undefined and nothing why
// it is uses callback rather then method
// because it is depends upon the window object
// this is executing independetly this have the access of widow object

// How can you make it should print name
// setTimeout(function(){
//     user.logMessage()
// },  100)

// now this is invoked as a method that's why it is printed the name

// const user = {
//     name: 'Piyush',
//     greet(){
//         return `Hello, ${this.name} !`;
//     },
//     farewell: () => {
//         return `GoodBye, ${this.name}!`
//     }
// }

// console.log(user.greet()) // Hellw Piyush ! because it is depends upon the user object
// console.log(user.farewell()) // GoodBye undefined ! because it is depends upon the window object

// create a object calculator

// let calculator = {

// }

// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.multiply())


// let calculator = {
//     read() {
//         this.a = +prompt('a = ', 0);
//         this.b = +prompt('b = ', 0);
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     multiply(){
//         return this.a * this.b;
//     }
// }

// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.multiply())

// next question

// var length = 4;
// function callback(){
//     console.log(this.length); 
// }

// const object = {
//     length: 5,
//     method(fn){
//         fn(); // this fn function is depends upon the window object
//     },        // so it will printed 4  this concept is also relate to compose and pipe      
// };


// 2nd question relate to above question

// const object = {
//     length: 5,
//     method(){ // arguments = [callback, 2, 3]=> length of this array is 3 so it will be printed length => 3
// this array itself act like object
//  arguments[0](); // it is calculate the length how many values passed in below function
// callback, 2, 3 => total length = 3
//     }
// }

// object.method(callback, 2, 3); 
// output : 3
// this is most tricky and important interview question

// output based question


// const calc = {
//     total: 0,
//     add(a) {
//         this.total += a;
//         return this;
//     },
//     multiply(a) {
//         this.total -= a;
//         return this;
//     },
//     subtract(a) {
//         this.total -= a;
//         return this;
//     }
// }

// const result = calc.add(10).multiply(5).subtract(30).add(30);
// console.log(result.total)
































































