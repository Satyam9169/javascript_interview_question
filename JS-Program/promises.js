// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promise: Best video on promises
// -pending
// -resolve
// -reject


// function myDisplay(some) {
//     console.log(some);
// }

// let myPromise = new Promise(function(myResolve, myReject){

//     let x = 0;

//     // to producing the code

//     if (x !== 0) {
//         myResolve("OK")
//     } else {
//         myReject("Error");
//     }
// });

// myPromise.then(
//     function(value) {myDisplay(value)},
//     function(error) {myDisplay(error)}
// )


// nomal example 1)

// var promise = new Promise((resolve, reject) => {
//     const x = "geekforgeeks";
//     const y = "geekforgeeks";
//     if (x == y) {
//         resolve()
//     } else {
//         reject()
//     }
// })

// promise.then(()=> console.log('You are Geek'))
// .catch((error)=>console.log('Some error has occured' + error))



// function fun1()
// {
//     return new Promise(function(resolve, reject){
//         setTimeout(()=> {
//             const error = false;
//             if (!error) {
//                 console.log("Promise has resolved");
//                 resolve()
//             }else{
//                 console.log('Promise has Rejected');
//                 reject("Not filled")
//             }
//         }, 2000)
//     })
// }

// fun1().then(()=> console.log('thanks for resolving'))
// .catch((error)=>console.log("sorry not resolved" + error))


// const student = [
//     {name: "harry", subject: "Javascript"},
//     {name: "Rohan", subject: "React JS"}
// ]


// function enrollStudent(students) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             student.push(students);
//             console.log("Student has been enrolled ");
//             const error = false;
//             if (!error) {
//                 resolve()
//             } else {
//                 reject()
//             }
//         }, 1000);
//     })
// }

// const getStudent = () => {
//     setTimeout(() => {
//         let str = "";
//         student.forEach( (students)=> {str += `<li> ${students.name}</li>`});
//         document.getElementById('students').innerHTML = str;
//         console.log("Student data has been fetched !!");
//     }, 5000);
// }


// let newStudent = {name: "Sunny", subject: 'python'}

// enrollStudent(newStudent).then(getStudent).catch(()=> {
//     console.log("Some error occured");
// })







