// A callback is a function passed as an argument to another function
// A callback function can run after another function has finished

// 1st example
// function myDisplay(sum) {
//     console.log(sum);
// }

// function Add(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum)
// }

// Add(5,5, myDisplay)



//2nd example
// function divideBy2(sum) {
//     console.log(Math.floor(sum / 2));
// }

// function Multyply2(sum) {
//     console.log(sum * 2);
// }

// function Add(num1, num2, operation) {
//     var sum = num1 + num2;
//     operation(sum)
// }

// Add(3, 3, divideBy2)
// Add(4, 4, Multyply2)

// 3rd example

const myFirst = () => {console.log("Hello");}
const mySecond = () => {console.log("Hi");}

mySecond()
myFirst()

// In the provided code, the line callback(sum) is an example of using a callback function to process the result of an operation 
// asynchronously. Let's break down what's happening and discuss the purpose and advantages of using a callback in this context.

// javascript
// Copy code
// function myDisplay(sum) {
//     console.log(sum);
// }

// function Add(num1, num2, callback) {
//     let sum = num1 + num2;
//     callback(sum); // Calling the callback function with the sum as an argument
// }

// Add(5, 5, myDisplay);
// In this code:

// myDisplay is a function that simply logs the value it receives.

// Add is a function that takes three arguments: num1, num2, and callback. It calculates the sum of num1 and num2, 
// and then it calls the callback function with the calculated sum as an argument.

// The Add function is invoked with arguments 5, 5, and myDisplay. This means that myDisplay is the callback function that will be executed.

// Inside the Add function, after calculating the sum, callback(sum) is called. This means the myDisplay function will be executed, 
// and the calculated sum will be passed to it.

// The purpose of using callback(sum) is to allow you to perform some specific action with the result of the Add operation
//  (in this case, summing two numbers). By using a callback, you can separate the logic for performing the operation from the logic for handling the result. This separation of concerns can lead to more modular and maintainable code.

// Advantages of using a callback in this line:

// Asynchronous Handling: Callbacks are often used in asynchronous scenarios, where an operation takes time to complete. 
// By passing a callback, you can ensure that the result is handled appropriately once the operation is finished.

// Modularity: Callbacks promote modularity by allowing you to define different pieces of functionality 
// (such as the addition operation and the result display) independently. This can make your code easier to understand and maintain.

// Flexibility: Callbacks provide a flexible way to customize behavior. Different callbacks can be passed to the same
//  function, allowing you to perform various actions with the same core logic.

// Event Handling: Callbacks are also commonly used in event-driven programming, where a function is executed 
// in response to an event, like a button click or an HTTP request completion.

// While callbacks are a powerful tool, they can sometimes lead to callback hell or complex nesting when 
// dealing with multiple asynchronous operations. This is why modern JavaScript introduced features like Promises and async/await to handle asynchronous code in a more structured and readable way.