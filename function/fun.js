// function declration with normal function

// function Add(a, b) 
// {
//     return a + b;
// }

// function declration with arrow function
// const Add = (a, b) => a + b;

// let answer = Add(2, 5);
// console.log(answer);

// Function expressions in JavaScript are similar to regular function declarations.
// The difference between them is that the function expression is always assigned to a variable

//const multiply = function () {return a * b}  // with normal function
// const multiply =  (a, b) =>  a * b; // with arrow function
// console.log(multiply(2, 2));

// passing the value as a parameter

// function Hello(param){
//     console.log(param);
// }
// Hello('Hi')

// Default parameter
// function calc(a, b){
//     return (2 * (a + b));
// }

//console.log(calc(2,3)) //output : 10
//console.log(calc(2)) //output : NaN

// function calc(a, b = 0){
//     return ( 2 * (a + b));
// }

// console.log(calc(2)); // output : 4


// REST OPERAROR
// rules : first of all we have to mention spread operator ...y in last as a argument
// function Collect(x, ...y){
//     console.log(x);
//     console.log(y);
// }
// console.log(Collect(1,2,3,4,5,6,7,8)); //output :  x = 1, y = [2,3,4,5,6,7,8]

// FUNCTION Interview Questions

// Question 1 : Function Code

function square(num) {
    return num * num;
  }
  function displaySquare(fn) {
    console.log("Square is " + fn(5));
  }
  displaySquare(square); 
  
  // Question 2 :  What is IIFE?
  
  // Eg-1
  (function square(num) {
    console.log(num * num);
  })(7);
  
  // Eg-2
  (function (x) {
    return (function (y) {
      console.log(x);
    })(2);
  })(1);
  
  // The key point here is that the inner function has access
  // to the variables of the outer function due to JavaScript's lexical scoping.
  // In this specific case, the value of x in the outer function is 1, and this value is accessible 
  // within the inner function. Thus, console.log(x) logs 1 to the console.

  // Question 3 : Closure
  
  function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  
  
  
  // Question 4 : Function Scope
  
  // Q-1
  var num1 = 20,
    num2 = 3,
    name = "Roadsidecoder";
  
  function mul() {
    return num1 * num2;
  }
  mul();
  function getScore() {
    var num1 = 3,
      num2 = 4;
    function add() {
      return name + " scored " + (num1 + num2);
    }
    return add();
  }
  getScore();
  
  
  // Q-2
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      // 3 times 5
      console.log(i); //var have global scope it executee till end 
    }, i * 1000); // when i will get the value 5 then it printed 5 five times => 5,5,5,5,5
  }
  
  
  
  // Question 5 : Function Hoisting
  
  // Without Hoisting:
  function functionName() {
    console.log("work at tech");
  }
  
  functionName();         // function is called after declaring it
  
  // With Hoisting:
  functionName();        // function is called before declaring it
  
  function functionName() {
    console.log("work at tech");
  }
  
  // Output 
  var x = 21;
  var fun = function () {
    console.log(x);
    var x = 20;
  };
  fun();  // output : undefined
  // In JavaScript, variables declared with
  // the var keyword are hoisted to the top 
  // of their scope.However, only the declaration
  // is hoisted, not the initialization.This means
  // that the variable x is hoisted, but its value
  // is not assigned until the line where it's declared.
  
  // So when console.log(x) is executed within the function fun(),
  // x is already declared within the function's scope due to hoisting,
  // but its value is undefined because the initialization (var x = 20;)
  // hasn't happened yet. The output will be undefined
  
  
  
  // Question 6 :  Params vs arguments
  
  const fn = (a, x, y, ...numbers) => {
    console.log(x, y)
  };
  fn(5, 6, 7, 8);
  // output: 6, 7
  
  
  // Question 7 : Spread operator and rest operator
  function multiply(...nums) {  // rest operator ,should always be the last one
    console.log(nums[0] * nums[1]);
  }
  var arr = [5, 7];
  multiply(...arr) // Spread operator
  
  
  
  // Question 8 : Callback
  
  function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);
  
  
  
  // Question 9 : Arrow functions
  
  const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
  }
  
  const addNum = (firstNum, secondNum) => firstNum + secondNum;
  
  // Question 10 : this
  
  let user = {
    name: "Roadside Coder",
    rc1: () => {
      console.log("Subscribe to " + this.name); // arrow function is depends upon the global object
    },
    rc2() {
      console.log("Subscribe to " + this.name); // 
    },
  };
  
  user.rc1() // Subscribe to undefined
  user.rc2()  // Subscribe to Roadside Coder
  
//********************Diff bet normal function and arrow function***********************
//1) **syntax**
function multiply (num) {
    return num * num;
}

const multiply = (num) => {
    return num * num;
}
// but we can write without return function
const multiply = num => num * num;

// 2) arguments 
// in normal function it will printed the value
function multiply(){
  console.log(arguments)
}
multiply(1,2,3,4,5) 
// output : [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// but in arrow not printed
const multiply = () =>{
    console.log(arguments)
  }
  multiply(1,2,3,4,5) // TypeError: ArrowFunction is not a constructor
  

/*
Normal functions and arrow functions in JavaScript differ in several key ways:

Syntax:

Normal function:
javascript
Copy code
function normalFunction() {
  // function body
}
Arrow function:
javascript
Copy code
const arrowFunction = () => {
  // function body
}
this Binding:

Normal functions have their own this context, which depends on how they are called.
Arrow functions do not have their own this. Instead, they inherit this from the parent
scope at the time they are defined (lexical scoping).
javascript
Copy code
const obj = {
  normalFunction: function() {
    console.log(this); // refers to obj
  },
  arrowFunction: () => {
    console.log(this); // refers to the lexical scope, not obj
  }
};

obj.normalFunction(); // obj
obj.arrowFunction(); // global or window object in non-strict mode, undefined in strict mode
Arguments Object:

Normal functions have their own arguments object, which is an array-like object containing the
arguments passed to the function.
Arrow functions do not have their own arguments object; they inherit it from the parent scope.
javascript
Copy code
function normalFunction() {
  console.log(arguments);
}

const arrowFunction = () => {
  console.log(arguments);
};

normalFunction(1, 2, 3); // [1, 2, 3]
arrowFunction(1, 2, 3); // ReferenceError: arguments is not defined
Constructor:

Normal functions can be used as constructors and can be called with the new keyword to create instances.
Arrow functions cannot be used as constructors and will throw an error if used with new.
javascript
Copy code
function NormalFunction() {
  this.value = 1;
}

const ArrowFunction = () => {
  this.value = 1;
};

const obj1 = new NormalFunction(); // works fine
const obj2 = new ArrowFunction(); // TypeError: ArrowFunction is not a constructor
Implicit Return:

Arrow functions allow for concise syntax when a single expression is returned. The 
expression is returned implicitly without the need for the return keyword.
javascript
Copy code
const addNormal = function(a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
No prototype Property:

Normal functions have a prototype property, which is used when creating objects via constructors.
Arrow functions do not have a prototype property.
javascript
Copy code
function normalFunction() {}
const arrowFunction = () => {};

console.log(normalFunction.prototype); // {}
console.log(arrowFunction.prototype); // undefined
These differences make arrow functions particularly useful for non-method functions that do not need
their own this context and for writing concise code. Normal functions are better suited for methods, 
constructors, and situations where dynamic this context is required.

*/





  




