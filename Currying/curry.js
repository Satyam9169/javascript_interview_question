// CURRYING Interview Question

// Question 1 : Currying

// function f(a) {
//     return (b) => {
//         return "Works"
//     }
// }
// console.log(f(1)(2));

// Question 2 : sum(2)(6)(1)

// function sum(a) {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// console.log(sum(1)(2)(3)) // 6

// 4 : Write a currying fn
//       evaluate("sum")(4)(2)
//       evaluate("multiply")(4)(2)
//       evaluate("divide")(4)(2)
//       evaluate("substract")(4)(2);

// function evaluate(operation) {
//     return (a) => {
//         return (b) => {
//             if (operation === 'sum') return a + b;
//             else if (operation === 'multiply') return a * b;
//             else if (operation === 'subtract') return a - b;
//             else if (operation === 'divide') return a / b;
//             else return 'invalid operation'
//         }
//     }
// }

// console.log(evaluate('sum')(2)(3));
// console.log(evaluate('multiply')(2)(3));
// console.log(evaluate('subtract')(2)(3));
// console.log(evaluate('divide')(2)(3));

// Question 5 : Infinite Currying -> sum(1)(2)(3)....(n)

// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     };
// }
// console.log(add(5)(2)(4)(8)())

// Question 6 : currying vs partial application

// function sum(a) {
//     return (b, c) => {
//         return a * b * c
//     }
// }

// let x = sum(10);
// x(3,12);
// x(20,12);
// x(20,13);
// OR
// sum(10)(3,12);
// sum(10)(20,12);
// sum(10)(20,13);

// 2nd example
// const userInfo = {
//     name: 'satyam',
//     age: 28
// }

// function userObj(obj){
//     return function(userObj){
//         return obj[userObj]; // because we want to access the property of userObj function
//     }
// }

// const result = userObj(userInfo);
// console.log(result('age')); // 28

// const result = add(1)(3)(5)();
// console.log(result);
// but i have multiple currying then have to moved with resursion concept

// function add(a) {
//     return function (b) {
//         if (b) {
//             return add(a + b);
//         } else {
//             return a;
//         }
//     }
// }

// const result = add(1)(7)(8)(3)(26)(5)();
// console.log(result);

// another example of the currying

// function curry(func) {
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func(...args);
//         } else {
//             return function (...nextArgs) {
//                 return curried(...args, ...nextArgs);
//             }
//         }
//     }
// }

// const sum = (a, b, c, d) => a + b + c + d;

// const result = curry(sum);
// console.log(result(2)(4)(5)(7))

// whenever we passed the argument in result((2)(4)(5)(7)()) -> 1st it will go in curry function
// when it will get in curry function then -> it will perform 2 action first-> it will save sum of all number
// 2nd curry function perform own action like it will go inside curry function compare the length then
// it will return us calculate value of sum

// Write a function curry() that converts f(a,b,c) into a curried function f(a)(b)(c) with placeholder ( _ ) support.

function curry(func) {
  return function curried(...args) {
    // Check if enough arguments are provided or if one of them is a placeholder
    if (args.length >= func.length && !args.includes("_")) {
      return func(...args);
    } else {
      return function (...nextArgs) {
        const combinedArgs = args
          .map((arg) =>
            arg === "_" && nextArgs.length ? nextArgs.shift() : arg
          )
          .concat(nextArgs);
        return curried(...combinedArgs);
      };
    }
  };
}

// Example usage:
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6
console.log(curriedAdd(1, "_", 3)(2)); // Output: 6
