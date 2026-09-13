// function fun1(){

// setTimeout(() => {
//     console.log(x);
//     console.log(y);


// }, 3000);

// var x = 2;
// let y = 12;
// }

// console.log(fun1())

// ************** SOLUTION ************************* //
// Now, the arrow function inside the setTimeout is executed after the delay of 3000 milliseconds. At this point:
//The variable x is accessible because it was declared in the outer scope (hoisting), so it has a value of 2.
//The variable y is also accessible because it was declared using let in the outer scope, so it has a value of 12.
// You see "undefined" printed first because the variable x is logged before its value is assigned.


// ******** Second Question *****************
// function fun2() {
     
//     for(var i = 0; i < 3; i++){
//         setTimeout(()=> console.log(i), 3000)
//     }
// }

// console.log(fun2())

// because var keyword doesn't have block scop
// first it will callculate the value then print the value 
// 3 three times


// (function(){
//     setTimeout(() => console.log(1), 0);
//     console.log(2);
//     setTimeout(() => console.log(3), 2000);
//     console.log(4);
// }
// )();



// You have an immediately invoked function expression (IIFE) without a name (function(){...})();. This allows you to create a local scope and execute the code inside immediately.
// Inside the IIFE, the following steps occur:
// The first setTimeout function is called with a delay of 0 milliseconds. Despite the delay being 0, JavaScript still needs to wait for the current execution context to complete before executing the callback function. Therefore, the function is added to the event queue and will be executed after the current synchronous code finishes.
// You log the value 2 to the console.
// The second setTimeout function is called with a delay of 2000 milliseconds. Similarly, it is added to the event queue and will be executed after the first setTimeout callback function.
// You log the value 4 to the console.
// After the IIFE is executed, the synchronous code has completed and JavaScript can now process the event queue.
// The first setTimeout callback function is now executed. It logs the value 1 to the console.
// Next, the second setTimeout callback function is executed after a delay of 2000 milliseconds. It logs the value 3 to the console.
// To summarize, the output "2, 4, 1, 3" occurs because the two setTimeout functions add their respective callback functions to the event queue. The synchronous code (console logs of 2 and 4) is executed first, followed by the asynchronous callbacks (1 and 3) in the order they were added to the queue. The delays specified in the setTimeout functions determine when the callbacks are executed, but they don't block the execution of the remaining code.





