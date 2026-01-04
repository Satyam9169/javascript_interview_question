//CALL APPLY AND BIND
Function.prototype.myCall = function (context, ...args) {
    // 1. Handle null/undefined
    context = context || globalThis;

     // 2. Create unique key to avoid overwriting
    const result = Symbol("fn")

    // 3. Attach function to context
    context[result] = this;

    //4. Invoke function
    context[result](...args);

    //5. cleanup
    delete context[result];

    // 6. return result
    return result;
}

function sayHello(){
    console.log(`Hello ${this.name}`);
}

const person1 = {name: "Ram"};
const person2 = {name: "Shyam"};
sayHello.myCall(person1)
sayHello.myCall(person2)