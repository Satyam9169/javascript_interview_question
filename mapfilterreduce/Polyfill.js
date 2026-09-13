//Polyfill
//1) Map
// Array.prototype.myMap = function (callback) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this))
//     }
//     return result;
// }

// let arr = [1, 2, 3, 4, 5];
// let ans = arr.myMap((ele, i, arr1) => ele * 2 + i);
// console.log(ans)


// myfilter
// Array.prototype.myFilter = function(callback){
//     let result = [];
//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i], i, this)){
//             result.push(this[i]);
//         }
//     }
//     return result;
// }

// let arr = [1, 2, 3, 4, 5];
// const ans = arr.myFilter((ele)=> ele >= 3)
// console.log(ans);

//myReduce
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

let arr = [1, 2, 3, 4, 5];
let ans = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(ans);
