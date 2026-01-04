//CALL APPLY AND BIND
//1) CALL
// Function.prototype.myCall = function (context, ...args) {
//     // 1. Handle null/undefined
//     context = context || globalThis;



//      // 2. Create unique key to avoid overwriting
//     const result = Symbol("fn")

//     // 3. Attach function to context
//     context[result] = this;

//     //4. Invoke function
//     context[result](...args);

//     //5. cleanup
//     delete context[result];

//     // 6. return result
//     return result;
// }

// function sayHello(){
//     console.log(`Hello ${this.name}`);
// }

// const person1 = {name: "Ram"};
// const person2 = {name: "Shyam"};
// sayHello.myCall(person1)
// sayHello.myCall(person2)

//2) Apply

Function.prototype.myApply = function(context, args = []){
    context = context || globalThis;

    // find unique key avoid overriting
    const funcKay = Symbol("fs");

     context[funcKay] = this;
     let result = context[funcKay](...args);

     delete context[funcKay];

     return result;
}

function greet(city, country){
    return `Hello ${this.name} from ${city}, ${country}`
}

// Object to bind as `this`
let user = {name: 'satyam'};

// Arguments array (apply-style)
const args = ['Mumbai', 'India'];
const result = greet.myApply(user, args);
console.log("Using Apply : ", result)