// toString() --> it will convert in string

// let arr = ['Yamaha', 'TVS', 'Bajaj', 'Honda']
// console.log(arr.toString())

//join() --> it is concate all the string
// let bikes = ['yahama', 'Bajaja', 'TVS', 'Ducatii'];
// console.log(bikes.join());
// console.log(bikes.join(" "));
// console.log(bikes.join("-"));

// push() --> it is added the element from last element of an array
// let bikes = ['Bajaj', 'Yahama', 'TVS', 'Ducatii']
// bikes.push('Honda', 'maruti suzuki')
// console.log(bikes);

// shift() ==> it will remove the first element
// let bikes = [ 'Bajaj', 'Yahama', 'TVS', 'Ducatii', 'Honda', 'maruti suzuki' ];
// bikes.shift();
// console.log(bikes);

// unshift() ==> it is added the element from beginning
// let bikes = ['Yamaha', 'Bajaj', 'TVS', 'Honda', 'Maruti-suzuki'];
// bikes.unshift('bicyle', 'mahindra');
// console.log(bikes);


// delete operator => it will delete the array at that place it create empty array and increased the length
// let arr = ['Yamaha', 'Bajaj', 'TVS', 'Honda']
// delete arr[1];
// console.log(arr);

// concat method
// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// let arr3 = [70, 80, 90];
// let new_array = arr1.concat(arr2, arr3);
// console.log(new_array);

// sort method => it will sort from swquence

// let arr = [20,50,72,0,57,1];
// let str = ['b', 'c', 'd', '9', '1'] // first it will sort digit then character

// arr.sort()
// console.log(arr);
// str.sort()
// console.log(str);

// splice() method it will add or remove the element from array
// It doesn't work with strings
// let arr = ['a', 'g', 'f']
// arr.splice(2, 0, 10, 20); // for add
// console.log(arr);

// arr.splice(2,1); // for remove the elements
// console.log(arr);

//slice() method => it will return selected elements and it will silent last index
// let arr = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let fruits = arr.slice(1, 3);

// console.log(fruits);

// isArray() method => it will return true if object is an array. otherwise false
// it will use with Array.isArray()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const str = 'satyam';
console.log(Array.isArray(fruits));
console.log(Array.isArray(str));


// indexOf() => it will return the element given index otherwise -1
// it will search left to right

// let arr = ['laptop', 'headset', 'mobile', 'router'];
// console.log(arr.indexOf('mobile', 0));
// console.log(arr.indexOf('mobile', 3));

// lastIndexOf() => it will return value from last from an array if found otherwise -1

// let arr = ['laptop', 'mobile', 'headset', 'mobile', 'router'];
// console.log(arr.lastIndexOf('mobile', 0));
// console.log(arr.lastIndexOf('mobile', 4));

// find() return first element as given logic otherwise undefined

// let arr = [5, 12, 8, 130, 44];
// const found = arr.find((element) => element > 10)
// console.log(found);

// findIndex() => it will return index if value is not found return -1;
// const arr = [2, 17, 8, 130, 57]
// const found = (element) => element > 13;
// console.log(arr.findIndex(found));

// includes() => if element is contain in array then return true otherwise false

// let arr = [2, 5, 1, 99, 23];
// console.log(arr.includes(5));
// let str = ['cat', 'rat', 'dog', 'element'];
// console.log(str.includes('dog'));

// entries() => it wil return you in key/value pair format
// it does not change in original array
// let days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat']
// let day = days.entries()

// for(let x of day){
//     console.log(x + ' \n');
// }

// every() method tests all elments which is present in the array according to the logic otherwise false
// let arr = [1, 5, 39, 340, 7]
// let pass_arr = (ele) => ele < 40;
// console.log(arr.every(pass_arr));

// valueOf()
// The valueOf() method returns the primitive value of a string.
// The valueOf() method does not change the original string.
// The valueOf() method can be used to convert a string object into a string.

// let text = 'Hello World !!';
// let result = text.valueOf()
// console.log(result);

// flat()
// const arr [1,2,3,[4,5],6]
// const arr = [1,2,[3,4,[5,[[[[[[[[[[[[[[[[[[[[[[[[[[[[[,6]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],7]
// console.log(arr.flat(Infinity));