// HOISTING
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
// This means that you can use variables and functions before they are declared in the code.

// FOR MORE INFORMATION OPEN WORD DOCUMENTATION NOTES FILE

// basic hoisting
// ex: 1
var x = 10; // hoisted to the top of the scope
a();
b();
console.log(x); // undefined

function a() {
  let x = 20; // this x is not hoisted to the top of the scope
  console.log(x);
}

function b() {
  let x = 100;
  console.log(x);
}

// ex: 2
// getName1();
// getName2();
// getName3();
// console.log(x);
// console.log(getName)
//var x = 10; // hoisted to the top of the scope
// function declaration hoisting
// function getName1() {
//   console.log("Hello, I am a function");
// }
// function expression hoisting
// const getName2 = () => {
//   console.log("Hello, I am  a function");
// }
// const getName3 = function () {
//   console.log("Hello, I am a function");
// }

// getName();
// console.log(x);

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b); // reference error : b is not defined
// console.log(c);

// Legal and Illegal shadowing
// in case of var
// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// line no outer scope of a and inner scope ofa
// refering to the same memory location that is global space
// it modified the value of a (var have a global scope)
// output
// 10
// 20
// 30
// 40

// in case of let
// let b = 100;
// {
//     var a = 10;
//     let b = 20;  // this b is shadowing to outer scope b = 100;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// let have block scope located another memeory space
// console.log(b);
// output
// 10
// 20
// 30
// 100

// in case of const c it is also
// acting like let
// let c = 100;
// {
//     var a = 10;
//     let b = 20;  // this c is shadowing to outer scope c = 100;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const have block scope located another memeory space
// console.log(c);
// output
// 10
// 20
// 30
// 100

//
// let a = 20;
// {
//     var a = 20;
// }
// it will not through the error
// because var cannot go outside the boundry and var have function scope
// and let cannot be re-declared

//
// const a = 20;
// {
//     const a = 10;
//     {
//         const a = 30;
//         console.log(a);
//     }
// }
// console.log(a);

// Illegal shadowing
// let a = 20;
// {
//     var a = 20;
// }

// var cannot shadow to let
// this is called illegal shadowing
// itdentifier a already has been declared
