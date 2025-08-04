// IIFE with parameter
(function(name) {
    console.log('Hello, ' + name + "!");
})('john')

// IIFE is returing the value
const result = (function(){
    var x = 15;
    var y = 20;
    return x + y;
})()

console.log(result);


// IIFE with private variables
// var counter = (function(){
//     var count = 0;
//     return {
//         increment : function () {
//             count++;
//         },
//         decrement : function() {
//              count--;
//         },
//         getCount : function() {
//             return count;
//         }
//     }
// })()

// counter.increment()
// counter.decrement()
// console.log(counter.getCount());


// IIFE inside a loop:

// for(let i = 1; i <= 5; i++){
//     (function(index){
//         setTimeout( function(){
//             console.log(index);
//         }, 2000)
//     })(i)
// }

// let's see with another example

// const a = () => {
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(456)
//         }, 2000);
//     })
// }
// (async ()=> {
//     let b = await a();
//     console.log(b);
//     let c = await a();

// })()

// other example
// let myModule = (function(){
//     let firstPoint = "I am private";

//     function privateFunction() {
//         console.log('I am also a private function');
//     }

//     return {
//         publicFunction : function(){
//             console.log('I am from public function');
//         }
//     }
// })()

// myModule.privateFunction
// myModule.publicFunction()


// with setTimout 

