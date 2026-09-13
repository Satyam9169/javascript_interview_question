// const obj = {
//     name: 'ram',
//     age: 26, // property
//     passion: 'problem solving',
//     introduceMyself: function(){ // method
//         console.log("Hello world ")
//     }
// }
// console.log(obj)

// const obj = {
//   name: "ram",
//   age: 26,
//   passion: "problem solving",
//   introduceMyself: function () {
//     //console.log(`my name is ${name}, age is ${age}, and age is ${age}`)//we will get reference error : age is not defined to resolve this problem we can use this keyword
//     console.log(`my name is ${this.name},
// age is ${this.age},
// and passion is ${this.passion}`);
//   },
// };
// obj.introduceMyself();

// now here we create new function and linked with introduceMysef object
// we don't need to write the function again and again
// we have create one function and called in each object
// const obj1 = {
//   myName: "ram",
//   age: 26,
//   passion: "problem solving",
//   introduceMyself: introduce,
// };

// const obj2 = {
//   myName: "shyam",
//   age: 27,
//   passion: "problem solving",
//   introduceMyself: introduce,
// };

// const obj3 = {
//   myName: "hanuman",
//   age: 28,
//   passion: "problem solving",
//   introduceMyself: introduce,
// };

// function introduce() {
//   console.log(`my name is ${this.myName},
// age is ${this.age},
// and passion is ${this.passion}`);
// }

// obj1.introduceMyself();
// obj2.introduceMyself();
// obj3.introduceMyself();

// we can improve that
// above we have created more object and calling seperately
// for improvement we can create one object with multiple instances
// with the help of object literal we can create one object cannot create multiple object(singaltan object)(for multiple object above we have created(replicate) that is not a good practice)
// to create multiple instance we can factory function

// function user(name, age, passion) {
//   return {
//     myName: name,
//     age,
//     passion,
//     introduceMySelf: function(){
//         console.log(`my name is ${this.myName} age is ${age} and passion is ${passion}`)
//     }
//   };
// }

// let result = user("satyam", 27, "BMW");
// let result1 = user("shivam", 28, "farrari");
// result.introduceMySelf()
// result1.introduceMySelf()
// console.log(result);
// console.log(result1);

// using constructor function
// function User(name, age, passion){
//     this.name = name;
//     this.age = age;
//     this.passion = passion;
//     return this;
// }

// const s1 = User("satyam", 25, "BMW") // first it was showing the object when 2nd one is not created
// const s2 = User("shivam", 26, "bhukati") // this one have override and shoing the same object property in both memory location
// console.log(s1)
// console.log(s2)

// for resolving the abose issue we have to use new keyword
// function User(name, age, passion){
//     this.name = name;
//     this.age = age;
//     this.passion = passion;
//     return this;
// }
// const s1 = new User("satyam", 25, "BMW")
// const s2 = new User("shivam", 25, "BMW")
// console.log(s1)
// console.log(s2)

// using class and ES6
class User {
  constructor(name, age, passion) {
    this.name = name;
    this.age = age;
    this.passion = passion;
    console.log("constructor is being called");
  }
  introduceMySelf(){
    console.log(`my name is ${this.name}, age is ${this.age} and passion is ${this.passion}`)
  }
}

let u1 = new User("satyam", 25, "problem solving");
let u2 = new User("shivam", 26, "listing music");
let u3 = new User();
console.log(u1);
console.log(u2);
console.log(u3);
u1.introduceMySelf()