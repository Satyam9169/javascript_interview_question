// 1) call
//  it helps you replace the value of this inside a function with whatever value you want.

// var obj = {name: 'satyam'}

// function sayHello(age){
//     return 'Hello ' + this.name + " is " + age;
// }

// console.log(sayHello.call(obj, 24));
// this is pointing to window object still we can pass argument like age
// as you can see in the above example

// 2) apply
// Apply is very similar to the call function.
// The only difference is that in apply you can pass an array as an argument list.

// var obj = {name: 'satyam'};

// function sayHello(age, profession){
//     return `Hello `  + this.name + " age is " + age + " : and his profession is " + profession
// }

// console.log(sayHello.apply(obj, [24, 'software engineer']));

// bind
// Bind is a function that helps you create another function
// that you can execute later with the new context of this that is provided.
// it return new function
// in this bind method method this keyword is bind by own object

// var obj = {name: 'Satyam'};

// function sayHello(age, profession){
//     return `Hello ` + this.name + " is " + age + " and his profession is " + profession;
// }

// const bindFunc = sayHello.bind(obj);

// console.log(bindFunc(24, 'software engineer'))
// console.log(bindFunc(27, 'senior software engineer'))

// bind function is reusable

// const person = {name: 'Piyush;'};

// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 24));
// console.log(sayHi.bind(person, 26)); // this will call later and give us return us function

// 5)

// const age = 10;

// var person = {
//     name: 'satyam',
//     age: 20,
//     getAge: function(){
//         return this.age;
//     },
// }

//var person2 = {age: 24};
//console.log(person.getAge()); //it will give you 20 bcz this keyword is depends upon
// window object(person)
// if i do with call() method interviewer can fonfused us
// it will give u updated version output
//

//console.log(person.getAge.call(person2)); //24

// 6)
// var status = "😎";

// setTimeout(()=> {
//     const status = "😍";

//     const data = {
//         status: "🥑",
//         getStatus(){
//             return this.status;
//         }
//     }
//     console.log(data.getStatus()) //🥑
//     console.log(data.getStatus.call(this))// 😎
// }, 0)
// because setTimeout is depends upon the global object

// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Queen' }
// ]

// function printAnimals(i) {
//     this.print = function () {
//         console.log('#' + i + " " + this.species + ": " + this.name);
//     }
//     this.print();
// }
// interviewer can confused us
// how can we achieve all animals data
// using for loop below for loop technique

// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i], i)
// }

const array = ["a", "b"];
const elements = [0, 1, 2];

array.push.apply(array, elements);
console.log(array);

// find min/max numbers in an array

// const numbers = [5,6,2,3,7];
// console.log(Math.max.apply(null, numbers))
// console.log(Math.min.apply(null, numbers))

//
// function f(){
//     console.log(this) // this is returning window object
// }

// let user = {
//     g: f.bind(null) //  this is return new function
// }

// user.g()
// output is : it will give us window object in console

//

// function f(){
//     console.log(this.name)
// }

// f = f.bind({name: "John"}).bind({name: 'Ann'});
// bind chaining is not available
// bind keyword cannot rebound
// f();

// output: John

//

// function checkPassword(success, failed) {
//     let password = prompt("Password?", "");
//     if (password == 'Roadside Coder') success()
//     else failed()
// }

// let user = {
//     name: 'Piyush, Agarwal',
//     loginSuccessful() {
//         console.log(`${this.name} logged in`)
//     },

//     loginFailed() {
//         console.log(`${this.name} failed to login`)
//     }
// }

// checkPassword(user.loginSuccessful, user.loginFailed)
// interviewer can ask me how to get the with name
// they can confused us

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user))

// function checkPassword(ok, fail) {
//     let password = prompt("password ? ", "");
//     if (password == 'Roadside Coder') ok();
//     else fail()
// }

// let user = {
//     name: 'satyam agrahari',
//     login(result) {
//         console.log(this.name + (result ? " login successful" : " login failed"));
//     }
// }
// interviewer can give this kind of question and have to set the accordingly
// checkPassword(user.login(user, true), user.login(user, false))
// have to use bind() method to show the right message
// checkPassword(user.login.bind(user, true), user.login.bind(user, false))

// const age = 10;
// var person = {
//     name: 'satyam',
//     age: 20,
// getAgeArrow: () => console.log(this.age), //this will show you undefined
//     getAgeArrow: () => console.log(this), // this will show you window object in console
//     getAge: function () {
//         console.log(this.age)
//     }
// }

// var person2 = { age: 24 };

// person.getAgeArrow.call(person2); // this is depends upon window object
// person.getAge.call(person2); // this is depends upon immediate parent person object

// POLYFILL FOR CALL, APPLY AND BIND

// CALL
// let car1 = {
//     color: 'Red',
//     company: 'Ferrari'
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car ${currency}${price}`
//     )
// }

// Function.prototype.myCall = function (context = {}, ...args) {
//     if (typeof this !== 'function') {
//         throw new Error(this + 'It is not callable');
//     }

//     context.fn = this; //function is bound to context via the fn property
//This ensures that the function (this) is executed in the context of the provided context object.
// context object by creating a property named fn on the context object and assigning it the function (this).
//     context.fn(...args);
// }

// purchaseCar.myCall(car1, "$", 2500000)

// APPLY
// let car1 = {
//     color: 'Red',
//     company: 'Ferrari'
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car ${currency}${price}`
//     )
// }

// Function.prototype.myApply = function (context = {}, args = []) {
//     if (typeof this !== 'function') {
//         throw new Error(this + 'It is not callable')
//     }

//     if (!Array.isArray(args)) {
//         throw new TypeError('CreateListFromArrayLike called on non-object')
//     }

//     context.fn = this;
//     context.fn(...args)
// }

// purchaseCar.myApply(car1, ["$", 2500000])

// BIND

let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car ${currency}${price}`
  );
}

Function.prototype.MyBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }
  context.fn = this;
  return () => {
    return context.fn(...args);
  };
};

const answer = purchaseCar.MyBind(car1, "₹", "1,00,00,000");
answer();
