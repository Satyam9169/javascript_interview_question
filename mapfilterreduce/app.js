// map =>

// const num = [1,2,3,4];
// const multiply = num.map((currentElement, index, actualArray) => {
//    return currentElement * 2 + index
// })
// actualArray => num
// console.log(multiply);

// filter => it added conditional statement if true it push in array
// if false not push in array
// const num = [1,2,3,4];
// const filterData = num.filter((value)=>{
//     return value > 2
// })
// console.log(filterData);

// reduce
// const num = [1,2,3,4];
// const sum = num.reduce((accumulator, currVal, index, array)=>{
//     return accumulator + currVal
// },0)
// console.log(sum);
// accumulator => initialValue of the array
// currVal => current Value from the array
// index => index of the array
// array => actual array mean (num)

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
// Array.prototype.myReduce = function(callback, initialValue){
//     let accumulator = initialValue;
//     for(let i = 0; i < this.length; i++){
//         accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
//     }
//     return accumulator;
// accumulator => initialValue
// this[i] => currentValue
// i => index
// this => actual array mean(num)
// }


// const num = [1,2,3,4];
// const sum = num.myReduce((accumulator, currVal, index, array)=>{
//     return accumulator + currVal
// },0)
// console.log(sum);


// Q6 - print the total marks of the students with marks greater than 60 after 20 marks
// has been added to those students who scored less than 60.
let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

const result = students.map(student => {
    if (student.marks < 60) {
        student.marks += 20;
    }
    return student;
}).filter(student => student.marks > 60).reduce((acc, curr) => acc + curr.marks, 0);

console.log(result);





















































