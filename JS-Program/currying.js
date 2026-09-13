// add the infinite number of sum


for(let i = 0; i < 5; i++){
    star = '';
    for(let j = 0; j < i; j++){
        star += '*';
    }
    console.log(star)
}
// for (let i = 0; i < 5; i++) {
//     let spaces = "";
//     let stars = "";

//     // Add spaces before each line
//     for (let j = 0; j < 5 - i; j++) {
//         spaces += " ";
//     }

//     // Add '*' characters for each line
//     for (let k = 0; k < 2 * i + 1; k++) {
//         stars += "*";
//     }

//     console.log(spaces + stars);
// }

// for(let i = 5 - 1; i >= 0; i--){ // maintaining the value of i
//         let spaces = '', stars = '';
//         for(let j = 0; j < 5 - i; j++){
//             spaces += ' ';
//         }

//         for(let j = 0; j < 2 * i + 1; j++){
//             stars += '*';
//         }

//         console.log(spaces + stars);
// }

// function curry(func){
//     return function  curriedFunc(...arg){
//         if(arg.length >= func.length){
//             return func(...arg)
//         }else{
//             return function(...next){
//                 return curriedFunc(...arg, ...next)
//             }
//         }
//     }
// }


// const sum = (a, b, c, d) => a + b + c + d;
// const total = curry(sum);
// console.log(total(5)(7)(8)(9));

// function add(a){
//     return function(b){
//         if(b) return add(a + b);
//         return a;
//     }
// }

// console.log(add(1)(2)(3)(4)())
