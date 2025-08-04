// 1st example 
// function x(){
//     let name = 'satyam';
//     function y(){// this is called closure
//         console.log(name);// from line no 3 to 7 called lexical scope
//     }
//     y();
// }
// x()

//2nd example
// const city = 'rampur';
// function x() {
//     let name = 'satyam'
//     console.log(city);
//     function y() { // y function is create which is form of closure
//         console.log(name);
//         console.log("indide of y : " + city);
//         let age = 26;
//     }
//     return y;
// }
// let z = x();
// console.log(z);
// z()
// Explanation: function y have reference of z bcz it referring to z
// when z is run then y is created
// The instance of y maintains a reference to its lexical environment,
// within which the variable name exists. For this reason, when z is 
//invoked, the variable name remains available for use, and "satyam" 
// is passed to console.log.

//3rd Example
// function x(a){
//    return function y(b){
//         return a + b;
//     }
// }

const x = a => b => a + b;

const add5 = x(5);
const add10 = x(10);

console.log(add5(2));
console.log(add10(2));

// Explanation:
//add5 and add10 both form closures.
// They share the same function body definition,
// but store different lexical environments.
//In add5's lexical environment, x is 5, while
// in the lexical environment for add10, x is 10.