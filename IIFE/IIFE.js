//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// It provides a way to encapsulate code and create a private scope, allowing for the isolation of variables and
// preventing interference with other parts of the code.

// Use Cases Of IIFE
// Avoid polluting the global namespace.
// To create closures in JavaScript.
// IIFE is used to create private and  public variables and methods.
// It is used to execute the async and await function.
// It is used to work with modules.
// 1st Example
// (function(){
//     console.log('Hi IIFE!!')
// })()

// 2nd Example
// var result = (()=> {
//     var x = 10;
//     var y = 20;
//     return x + y;
// })()
// console.log(result);

// 3rd Example
// ((name)=> {
//     console.log(`Hi! I'm Learning ${name}`);
// })("IIFE")

// 4th Example using async and await
// (async ()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
// })()

//4th Example
// for (var i = 0; i < 2; i++) {
//     const button = document.createElement("button");
//     button.innerText = `Button ${i}`;
//     button.onclick = function () {
//       console.log(i);
//     };
//     document.body.appendChild(button);
//   }
//   console.log(i); // 2
// Explanation: above example for loop with var first it will run the loop till end
// it shows us calculate, updated value means 2
// FOR OVERCOME THIS CHALLENGE => we have used IIFE to get the current value

// for (var i = 0; i < 2; i++) {
//   const button = document.createElement("button");
//   button.innerText = `Button ${i}`;
//   button.onclick = (function (copyOfI) {
//     return function () {
//       console.log(copyOfI);
//     };
//   })(i);
//   document.body.appendChild(button);
// }
// console.log(i); // 2

// 5th Example: Here’s an example demonstrating how an IIFE can be used to create private variables:
var counter = (() => {
  var count = 0;
  return {
    increment: function () {
      for (var i = 0; i < 5; i++) {
        count++;
      }
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
})();

counter.increment();
counter.decrement();
console.log(counter.getCount()); // here we are trying to access the private variale directly
