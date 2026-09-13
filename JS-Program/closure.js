// function Outer() {

//     var name = "I am from inner funtion";
//     function InnerFun() {
//         console.log(name);
//     }
//      InnerFun();
//     // return;
//     // return "i'm from outer function"
// }
// Outer()
// res = Outer()
// console.log(res);

// When you call Outer(), the InnerFun function is executed immediately within the Outer function scope. It logs the value of the name variable, which is "I am from inner function", to the console.

// However, the Outer function does not have a return statement. Therefore, when you assign the result of Outer() to the closure variable, it will be assigned undefined. That's why you see undefined when you log closure to the console.

// To clarify:

// When you directly call Outer() without assigning it to a variable, it executes the InnerFun function and logs "I am from inner function" to the console. Since there is no return value specified, there is no output of undefined.

// When you assign the result of Outer() to the closure variable, the Outer function is executed, the InnerFun function is called, and "I am from inner function" is logged to the console. However, since the Outer function does not explicitly return a value, the closure variable is assigned undefined.

// In both cases, "I am from inner function" is logged to the console, but undefined is only seen when closure is logged to the console because that's the value assigned to it due to the lack of a return value in the Outer function.






// var closure = Outer();
// console.log(closure); 

// with private variable
function counter () {
    var count  = 0;
    return function(){
        return ++count;
    }
}
var increment = counter()
console.log(increment());
console.log(increment());
console.log(increment());

// with data encapsulation
// function person(name){
//     return function (){
//         console.log('Name : ', name);
//     }
// }

// const john = person('John')
// const emily = person('emily')

// john()
// emily()

// Basic to closure
// function Outer() {
//  var name = "I am from outer function";
//     function inner(){
//         console.log(name);
//     }
//     return inner;
// }
// var result = Outer()
// console.log(result());


// cloures in loop
// function First(){

//     var result = []
//     for (let i = 0; i < 5; i++) {
//         result.push(function(){
//             console.log(i)
//         })
//     }
//     return result;
// }
// var fun = First()
// fun[0]()
// fun[1]()

// Example 3: Encapsulation and Data Privacy

// function counter() {
//     var count = 0;
//     return function(){
//         return ++count;
//     }
// }
// var increment = counter()
// console.log(increment());
// console.log(increment());

// Example 5: Module Pattern
// var calculator = (function(){
//     var total = 0;
//     return {
//         add: function(value){
//             total += value;
//         },
//         subtract : function(value){
//             total -= value;
//         },
//         getTotal: function(){
//             return total;
//         }
//     }
// })()

// (calculator.add(5))
// calculator.subtract(3)
// console.log(calculator.getTotal());