console.log("Rest and Spread Operators in JavaScript");
// spread operator
//let arr1 = [1,2,3];
//const arr2 = [...arr1, 4,5,6];
//const arr3 = arr2
//console.log("Creating shallow copy : ", arr3); // Output: [1, 2, 3] [1, 2, 3, 4, 5, 6] 7

//console.log(arr2) // Output: [1, 2, 3, 4, 5, 6]
// merge two arrays
//console.log([...arr1, ...arr2]); // Output: [1, 2, 3, 1, 2, 3, 4, 5, 6]

// shallow copy using array spread operator
// let arr1 = [1,2,3];
// let arr2 = arr1;
// console.log("Creating shallow copy : ", arr2); // Output: [1, 2, 3]
// arr2.push(4);
// console.log(arr1, "After pushing 4 to arr2 : ", arr2); // Output: [1, 2, 3, 4]
//console.log("After pushing 4 to arr2 : ", arr2);

// spread operator with objects
// let obj1 = {a: 1, b: 2};
// let obj2 = {...obj1, c: 3};
// console.log(obj1, "After spreading obj1 into obj2 : ", obj2); // Output: {a: 1, b: 2, c: 3}

// const {a, b, ...rest} = obj2;
// console.log("Destructuring obj2 : ", a, b, rest); // Output: 1 2 {c: 3}

// using function with spread operator
// function sum(...args){
//     return args.reduce((acc, curr) => acc + curr, 0);
// }
// function sum(a, b, c){
//     return a + b + c;
// }

//console.log(sum(...arr1)); // Output: 6

// function with rest operator
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum using rest operator: ", sum(1, 2, 3, 4, 5)); // Output: 15
