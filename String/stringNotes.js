// let firstName = 'satyam';
// let lastName = "agrahari"
// console.log(firstName + " " + lastName.toUpperCase())
// console.log(firstName, typeof (firstName));
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName)


// let a = 10;
// let b = 20;
// let c = 30;
// let str = `Number 1 = ${a} Number 2 = ${b} Number 3 = ${c}`;
// console.log(str);

// (`) backquote is called for the template literal
// ${a} => placeholder
// a is string interpolation

// let str1 = new String('satyam');
// console.log(str1)

// let str = 'satyam agrahari'
// console.log(str)

// for(let char in str){
//     console.log(char)
// }

// let str1 = "";

// for (let char of str) {
//     str1 = str1 + char + " ";
// }
// console.log(str1)

let str = 'satyam agrahari';
let capitalLetter = str.toLowerCase();
let upperLetter = str.toUpperCase();
console.log("capital letter => " + capitalLetter)
console.log("small letter => " + upperLetter)
console.log("indexOf() => " + str.indexOf('a'))
console.log("charAt() => " + str.charAt(3))
console.log("replace() => " + str.replace('satyam', 'shivam'))
console.log("replaceAll() => " + str.replaceAll('a', 'm'))
console.log("slice() => " + str.slice(6)) // this is also working for the negative index
console.log("substring() => " + str.substring(0, 6))

str = str.replace('agrahari', 'shivam'); // we can assign with another variable then logic based can do it
console.log(str); // otherwise this is a 

/*
Create a program to take full name from user and generate
a username start with @, followed by their full name and ends
with underscore followed by the length of full name.
*/
let fullName = prompt("Enter your fullName");
let username = `@${fullName.trim().replaceAll(" ", "")}_${fullName.length}`;
console.log(username);