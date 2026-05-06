CALL APPLY AND BIND

1) CALL

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

function sayHello() {
    console.log(`Hello ${this.name}`);
}

const person1 = { name: "Ram" };
const person2 = { name: "Shyam" };
sayHello.myCall(person1)
sayHello.myCall(person2)

2) Apply

Function.prototype.myApply = function (context, args = []) {
    context = context || globalThis;

    // find unique key avoid overriting
    const funcKay = Symbol("fs");

    context[funcKay] = this;
    let result = context[funcKay](...args);

    delete context[funcKay];

    return result;
}

function greet(city, country) {
    return `Hello ${this.name} from ${city}, ${country}`
}

Object to bind as `this`
let user = { name: 'satyam' };

Arguments array(apply - style)
const args = ['Mumbai', 'India'];
const result = greet.myApply(user, args);
console.log("Using Apply : ", result)



Here is the polyfill how internally working


1. Why two parameters: context and args = [] ?
    When you use the native.call(), it looks like this: func.call(thisArg, arg1, arg2, ...).Our polyfill needs to mirror this behavior.

        context: This represents the object you want this to point to inside the function. In JavaScript, this is usually determined by how a function is called. .call() allows us to manually "overwrite" that behavior.

            args = []: The native.call() takes a comma - separated list of arguments.In a polyfill, we usually use the Spread operator(...args) to collect those individual values into a single array so we can pass them into the function later.

2. What is context = context || globalThis ?
    This line is a safety fallback.It ensures the function always has an object to "live" on, even if the user provides something empty.

The Problem: In JavaScript, if you call a function and pass null or undefined as the context(e.g., myFunc.call(null)), the function shouldn't necessarily crash.

The Logic: This uses the Logical OR(||) operator.

If context is "truthy"(an object), use context.

If context is "falsy"(like null or undefined), default to globalThis.

What is globalThis ? It is a universal way to access the global object.In a web browser, globalThis is the window object.In Node.js, it is the global object.

    Q) Why do we attach function to context ?

        context[fnKey] = this;
This is the most critical part of the polyfill.
To understand why we do context[fnKey] = this, you have to understand the "Rule of the Dot" in JavaScript.

The Core Secret: Implicit Binding
In JavaScript, the value of this is usually determined by how a function is invoked.If a function is called as a method of an object(using a dot), this automatically points to that object.

If I call myFunc(), this is the global object(or undefined in strict mode).

If I call person.myFunc(), this is person.

Why the Assignment is Necessary
Since we are writing a polyfill for .call(), our goal is to force the function to treat the context as its this.

this inside myCall: When you run someFunction.myCall(myObj), the this keyword inside the myCall method refers to someFunction.

The Goal: We need to execute someFunction in a way that its own internal this points to myObj.

The Trick: By doing context[fnKey] = this, we are temporarily giving the object a new method.

A Concrete Example:
Imagine you have a function and an object:

JavaScript

function greet() {
    console.log("Hello, " + this.name);
}

const user = { name: "Arjun" };
If we just run greet(), it won't find this.name. But inside our polyfill, we do this:

JavaScript

Step 1: Temporarily attach the function to the object
user.tempFunction = greet; 

Step 2: Call it using the "Dot"
user.tempFunction(); // JavaScript sees the dot, sets 'this' to 'user'

Step 3: Cleanup
delete user.tempFunction;
Why use a Symbol or a Unique Key ?
    We use const fnKey = Symbol() instead of a plain string like 'tempFunction' because we don't want to accidentally overwrite a property that might already exist on the object. If the user object already had a property called tempFunction, a simple string key would destroy their data. A Symbol is guaranteed to be unique.

Summary of the "Chain of Command"
this = The function itself.

context = The object that wants to "own" the function.

context[fnKey] = this = Putting the function inside the object.

    context[fnKey]() = Executing the function as a method of that object, which naturally binds this.

        BIND

Function.prototype.myBind = function (context, ...bindArg) {
    if (typeof this !== 'function') {
        throw new Error('myBind can only be call on the function')
    }
    const originalFn = this;
    return function (...callArg) {
        return originalFn.call(context, ...bindArg, ...callArg)
    }
}

function greet(age, city) {
    return `My name is ${this.name} and age is ${age}, from ${city}`
}

const person1 = { name: 'satyam' }

const args = [29, 'musafirkhana'];
const result = greet.myBind(person1, ...args);

console.log(result())