/*
 Map => The map() method in JavaScript creates a new array by applying a callback
 function to each element of the original array.
    
  1. Internal Working of map()
  When you use map():
  JavaScript creates a NEW empty array
  It loops through each item
  Takes returned value
  Pushes returned value into new array
  Returns final array

1) Iterates through every element of the array.
2) Executes the callback function for each element.
3) Stores the returned value in the new array.
4) Map (Transformation):=> Maps an array of length $N$ to a new array of length $N$.
   It applies a transformation function to every element.


| Feature                 | map()                        | forEach()            |
| ----------------------- | ---------------------------- | -------------------- |
| Returns value?          | Yes                          | No                   |
| Return type             | New array                    | undefined            |
| Main purpose            | Transform data               | Execute side effects |
| Chainable               | Yes                          | No                   |
| Functional programming  | Yes                          | No                   |
| Memory usage            | More                         | Less                 |
| Immutable approach      | Preferred                    | Not ideal            |
| Used in React rendering | Very common                  | Rare                 |
| Can break loop?         | No                           | No                   |
| Async support           | Better with Promise handling | Weak                 |


2. What is forEach() in JavaScript?

forEach() is also an array iteration method, but its purpose is different.

It is mainly used to:

Execute some operation
Perform side effects
Log data
Update UI
Modify external variables

It does NOT return a new array.
*/

//Example - 1
/*
const num = [1,2,3,4];
const multiply = num.map((currentElement, index, actualArray) => {
   return currentElement * 2 + index
})
actualArray => num
console.log(multiply);
*/

/*
Filter => it added conditional statement if true it push in array
if false not push in array
    => The filter() method in JavaScript creates a new array containing
       only the elements that satisfy a condition defined in a callback function.
       
    1) Iterates over each element of the array
    2) Includes elements when the callback returns true
    3) Excludes elements when the callback returns false
*/

// Example - 2
/*
const num = [1,2,3,4];
const filterData = num.filter((value)=>{
    return value > 2
})
console.log(filterData);
*/


/* Reduce
 => The reduce() in JavaScript is used to combine all elements of an array into a single value by
    applying a callback function to each element.

1) Accumulator: stores the result after each iteration
2) currentValue: the current element being processed
3) currentIndex: index of the current element

Description
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.
*/

/* Example=> 3
   const num = [1,2,3,4];
   const sum = num.reduce((accumulator, currVal, index, array)=>{
    return accumulator + currVal
   },0)
   console.log(sum);

*/


/*
| Feature     | map         | filter      | reduce              |
| ----------- | ----------- | ----------- | ------------------- |
| Purpose     | Transform   | Select      | Aggregate           |
| Output size | Same        | ≤ Same      | Single value        |
| Return type | Array       | Array       | Anything            |
| Use case    | Modify data | Remove data | Calculate / combine |

*/

/*
accumulator => initialValue of the array
currVal => current Value from the array
index => index of the array
array => actual array mean (num)
*/




// *****Polyfill for map******
// Array.prototype.myMap = function(callback){
//     let newArray = [];
//     for(let i = 0; i < this.length; i++){
//         newArray.push(callback(this[i], i, this))
//     }
//     return newArray;
// }
// const num = [1,2,3,4,5];
// const multiply = num.myMap((item)=>{
//     return item * 2
// })
// console.log(multiply);

// *****Filter*****
// Array.prototype.myFilter = function(callback){
//     let newArray = [];
//     for (let i = 0; i < this.length; i++) {
//         if(callback(this[i], i, this))
//         {
//             newArray.push(this[i])
//         }
//     }
//     return newArray;
// }
// const num = [1,2,3,4,5];
// const multiply = num.myFilter((item)=>{
//     return item > 2
// })
// console.log(multiply);

// *****Reduce*****
// const num = [1,2,3,4]; for understanding
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
    // accumulator => initialValue
    // this[i] => currentValue
    // i => index
    // this => actual array mean(num)
}


const num = [1, 2, 3, 4];
const sum = num.myReduce((accumulator, currVal, index, array) => {
    return accumulator + currVal
}, 0)
console.log(sum);


// Q6 - print the total marks of the students with marks greater than 60 after 20 marks
// has been added to those students who scored less than 60.
// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Jenny", rollNumber: 15, marks: 69 },
//     { name: "Kaushal", rollNumber: 16, marks: 35 },
//     { name: "Dilpreet", rollNumber: 7, marks: 55 },
// ];

// const result = students.map(student => {
//     if (student.marks < 60) {
//         student.marks += 20;
//     }
//     return student;
// }).filter(student => student.marks > 60).reduce((acc, curr) => acc + curr.marks, 0);

// console.log(result);