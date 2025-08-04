// This is the example of callback
// for more understanding callback go to callback folder
// const add = (a, b) => a + b;
// const calculate = (a, b, callback) => callback(a, b);
// console.log(calculate(2, 3, add))

// callback hell=>
// nested callbacks stacked below one another forming a pyramid
// structure

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log('data', dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 1000)
// }

// getData(2, () => {
//     getData(3, () => {
//         getData(4, () => {
//             getData(5, () => {
//                 getData(6, () => {
//                     getData(7)
//                 })
//             })
//         })
//     })
// }) // to see the data in console => type getdata()

// By using this callback hell programming becomes
// difficult to understand, manage and debugg the code
// That's why we are using promises

// ***********PFOMISES*************
// Promises is for 'eventual' complietion of task. it is an object in js
// it is a solution of callback hell
// it have 3 state
// 1) pending
// 2) fullfill
// 3) rejected

// resolve and reject are the callbacks provide by js(default)

/*
suppose that i did one order on amazon
if it is successfully delivered the product then promises is resolved
if it is not then promises is rejected
*/
// let promise = new Promise((resolve, reject) => {
//     console.log('i am promise');
// resolve('Promise has been resolved') // for resolve the promise
//     reject('some error occured')
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('data', dataId);
//             resolve('success')
//             reject('error')
//             if (getNextData) {
//                 getNextData()
//             }
//         }, 5000)
//     })
// }
// const getPromises = () => {
//     return new Promise((resolve, reject) => {
//         console.log('i am a promises');
//               resolve('success')
//         reject('not resolved promises')
//     })
// }

// let promises = getPromises();
// promises.then((res) => console.log('promises fullfilled', res))
// .catch((err) => console.log('rejected', err));

// promises chaning
// function AsyncFun1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('data 1');
//             resolve('success')
//         }, 2000)
//     })
// }

// function AsyncFun2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('data 2');
//             resolve('success')
//         }, 4000)
//     })
// }

// console.log('fetching data1.....');
// let p1 = AsyncFun1();
// AsyncFun1().then((res) => {
// console.log(res);
// console.log('fetching data2.....');
// let p2 = AsyncFun2();
//     AsyncFun2().then((res) => console.log(res))
// })

// console.log('fetching data3.....');
// let p2 = AsyncFun2();
// p2.then((res) => console.log(res))

// 2nd way to write promises chaning

// function getData(dateId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data', dateId);
//             resolve('success');
//         }, 1000)
//     })
// }

// promises chaning
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(()=> {
//         console.log(res);
//     })
// })

// This is actual promises chaning
// getData(1).then((res) => {
//     console.log(res);
//     return getData(2);
// }).then((res)=> {
//     console.log(res);
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })

// using async and await
// async function getAllData() {
//     console.log('getting data1......');
//     await getData(1)
//     console.log('getting data2......');
//     await getData(2)
//     console.log('getting data3......');
//     await getData(3)
//     console.log('getting data4......');
//     await getData(4)
// }
// console.log(getAllData())

// to see the result in inspect -> console => write the funciton name => getAllData()
// (
//     async function getAllData() {
//         console.log('getting data1......');
//         await getData(1)
//         console.log('getting data2......');
//         await getData(2)
//         console.log('getting data3......');
//         await getData(3)
//         console.log('getting data4......');
//         await getData(4)
//     }
// )()

// ******RoadSide coder********
// 1)
// console.log('start');

// function importantAction(username){
//     setTimeout(()=> {
//         return `Hi ${username}`;
//     }, 1000)
// }

// const message = importantAction('satyam');
// console.log(message);
// console.log('end');

// 2)
// console.log('start');

// function importantAction(username, callback){
//     setTimeout(()=> {
//          callback(`Hi ${username}`)
//     }, 1000)
// }

// const message = importantAction('satyam', function(message){
//     console.log(message);
// });
// console.log('end');

// 3)
// console.log('start');

// function importantAction(username, callback) {
//     setTimeout(() => {
//         callback(`Hi ${username}`)
//     }, 1000)
// }

// function studying(username, callback) {
//     setTimeout(() => {
//         callback(`Hi ${username}`)
//     }, 1000)
// }

// function learning(username, callback) {
//     setTimeout(() => {
//         callback(`Hi ${username}`)
//     }, 1000)
// }

// function implementing(username, callback) {
//     setTimeout(() => {
//         callback(`Hi ${username}`)
//     }, 1000)
// }

// const message = importantAction('satyam', function (message) {
//     console.log(message);
//     studying(' am studying', function (message) {
//         console.log(message)
//         studying(' am learning', function (message) {
//             console.log(message)
//             studying(' am implementing', function (message) { console.log(message) })
//         })
//     })
// });
// console.log('end');

// 4 to resolve the callback-hell we using promises
// console.log('start')
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         const result = true;
//         if (result) {
//             resolve('You got approval to buy the phone');
//         } else {
//             reject(new Error('you are not able to buy the phone'))
//         }
//     },  2000)
// })
// console.log(promise);
// promise.then((res) => console.log(res))
//     .then((err) => console.log(err))
// console.log('end')

// 5 another way
// console.log('start')
// console.log(Promise.resolve('amazon product has been delivered successfully !!'))
// console.log('end');

// console.log('start')
// const result = Promise.reject('amazon product has not been delivered successfully !!');
// console.log(result);
// result.then((res) => console.log(res)).catch(err => console.log(err))
// console.log('end');

// This is called promise chaining
// console.log('start');

// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hi ${username}`)
//         }, 1000)
//     })
// }

// function studying(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hi ${username}`)
//         }, 1000)
//     })
// }

// function learning(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hi ${username}`)
//         }, 1000)
//     })
// }

// function implementing(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hi ${username}`)
//         }, 1000)
//     })
// }

// importantAction('satyam')
//     .then((res) => {
//         console.log(res)
//         return studying(' am studying')
//     }).then((res) => {
//         console.log(res)
//         return learning('am learning')
//     }).then((res) => {
//         console.log(res);
//         return implementing('am implementing')
//     }).then((res) => {
//         console.log(res);
//     }).catch((err) => console.log(err))

// console.log('stop');

// console.log('start');

// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
// resolve(`Hi ${username}`)
//             reject(`error occured !! ${username}`)
//         }, 1000)
//     })
// }

// function studying(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hi ${username}`)
// reject(`error occured !! ${username}`)
//         }, 1000)
//     })
// }

// function learning(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hi ${username}`)
// reject(`error occured !! ${username}`)
//         }, 1000)
//     })
// }

// function implementing(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
// resolve(`Hi ${username}`)
//             reject(`error occured !! ${username}`)
//         }, 1000)
//     })
// }
// Promise.all() => Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
// Promise.all([
//     studying(' am studying'),
//     learning('am learning'),
//     implementing('am implementing'),
// ]).then(res => console.log(res))
//     .catch(err => console.log(err))
// console.log('stop');

// Promise.race() => fulfills when any of the promises fulfills; rejects when any of the promises rejects.
// Promise.race([
//     studying(' am studying'),
//     learning('am learning'),
//     implementing('am implementing'),
// ]).then(res => console.log(res))
//     .catch(err => console.error('promises has failed !! ' + err))
// console.log('stop');

// Promise.allSettled() => Fulfills when all promises settle.
// Promise.allSettled([
//     studying(' am studying'),
//     learning('am learning'),
//     implementing('am implementing'),
// ]).then(res => console.log(res))
//     .catch(err => console.error('promises has failed !! ' + err))
// console.log('stop');

// Promise.any() => Fulfills when any of the promises fulfills; rejects when all of the promises reject.
// Promise.any([
//     studying(' am studying'),
//     learning('am learning'),
//     implementing('am implementing'),
// ]).then(res => console.log(res))
//     .catch(err => console.error('promises has failed !! ' + err))
// console.log('stop');

// resolve the promise using async and await
// const result = async () => {
//     try {
//         const message1 = await studying(' am studying');
//         console.log(message1);
//         const message2 = await learning('am learning');
//         console.log(message2);
//         const message3 = await implementing('am implementing')
//         console.log(message3);
//     } catch (error) {
//         console.error('promises has failed ' + error);
//     }
// }

// result()
// console.log('stop');

// Promise output based question
// console.log('start');
// let promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2)
// })

// promise.then((res) => console.log(res))
// console.log('end');

// explanation => javascript engine first execute the code synchronously
// then it will executed asynchronously first it will find sync in promise
// then it will go for asynchronously

// 2)
// Promise output based question
// console.log('start');
// let promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2)
//     console.log(3);
// })
// promise.then((res) => console.log(res))
// console.log('end');
// same explanation with previous example

// 3)
// console.log('start');
// let promise = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(3);
// })
// promise.then((res) => console.log('result ' + res))
// console.log('end');
// it will not go until you haven't resolve and reject inside the promise
// interviewr may be confused you

// 5)
// console.log('start');
// const promise = () =>
//  new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
// })

// console.log('middle');
// promise().then((res) => {console.log(res)})
// console.log('end');
// in this example start executed, after middle function will executed 1 => then go end then go inside success

// 6)
// function job() {
//     return new Promise((resolve, reject) => {
//         reject()
//     })
// }
// const promise = job();

// promise
//     .then(() => console.log('success1'))
//     .then(() => console.log('success2'))
//     .then(() => console.log('success3'))
//     .catch(() => console.log('Error1'))
//     .then(() => console.log('success4'))

// After .catch(): The rejection has been handled, and the promise is no longer in a rejected state.
// Next .then(): Because the promise is now in a resolved state (after the catch block handled the rejection),
// this .then() will execute and log "success4".

// 7)
// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);  // 1st step => here promise is true

// promise
//     .then(function (data) {
//         console.log(data); // promise is resolved means and print => success

//         return job(false); // here promise is reject then will go inside in catch block
//     })

//     .catch(function (error) {
//         console.log(error);       // here it will printed => error

//         return 'Error caught';   // here  return resolved promise error caught interviewer can confused you
//     })                           // after then it will go inside in then block

//     .then(function (data) {
//         console.log(data);   // it printed here => Error caught

//         return job(true); // here promise is true it will not go ahead because then block is not below
//     })                    // catch block is below because catch block is for when error occured
// agar catch block ke age then hota to jarur (resolve and reject) ho sakte tha (according to logic)
//  catch block he to nhi execute hoga
//     .catch(function (error) {
//         console.log(error);
//     });
// output
// success
// error
// Error cought

//8
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true); // here promise is resolved

// promise
// .then(function(data) {
//     console.log(data); //success

//     return job(true);
// })
// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';  // reject promise => it will go in catch block bcz data is equal to success
//     }
//     return job(true);  // this step will ingnore
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log(error);   // Defeat
//     return job(false); // here promise is rejected it will go in catch block
// })
// .then(function(data) {
//     console.log(data);
//     return job(true);
// })
// .catch(function(error) {
//     console.log(error);  // here it will print error
//     return 'Error caught'; // this is resolved promise interviewer may be confused you
// })
// .then(function(data) {
//     console.log(data); // here it will printed => Error caught
//     return new Error('test'); // here also resolved promise and interviewer may be confused you
// })
// .then(function(data) {
//     console.log('Success:', data.message); // here will printed => Success; test
// })                                         // it will stop here because there is no in return (resolved and reject promises)
// .catch(function(data) {
//     console.log('Error:', data.message);
// });

// 9
// const firstPromise = new Promise((resolve, reject) => {
//     resolve('First!')
// })

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise)
// })

// secondPromise.then(res => res)
//     .then(res => console.log(res))

// 10
// Question 8 : Rewrite this example code using `async/await`
//  Instead of `.then/catch`

// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }

// const loadJson = async(url) => {
//     const response = await fetch(url);
//     if (response.status === 200) {
//         const result = await response.json();
//         return result;
//     }
//     throw new Error(response.status);
// }
// loadJson('https://javascript.info/no-such-user.json').catch(alert);

// Question 9 : Solve Promise Recursively

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hi ${username}`);
      reject(`error occured !! ${username}`);
    }, 1000);
  });
}

function studying(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hi ${username}`);
      reject(`error occured !! ${username}`);
    }, 1000);
  });
}

function learning(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hi ${username}`);
      reject(`error occured !! ${username}`);
    }, 1000);
  });
}

function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;

  let recursivePromise = funcPromises.shift();
  recursivePromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  promRecurse(funcPromises);
}

promRecurse([
  importantAction("satyam"),
  studying(" am studying"),
  learning(" am learning"),
]);

// polyfill for promises => you can visit online site => https://roadsidecoder.hashnode.dev/javascript-interview-questions-promises-and-its-polyfills

// Important Rules for the ployfill
// 1) we already know the how defined the promise
// 2) We have a promise constructor function
// (new Promise((resolve, reject) => setTimeout(() => resolve(100), 3000)))
// which accepts a callback as an argument which will be executor in our case.

//constructor function will return an object with two properties then and catch.
// Then and catch are functions which accepts a callback and also can be chained.

// store the reference to callback function passed to then and catch so that it can
// be executed at a later stage basis on the status returned by executor.

// If executor resolves then we invoke then callback else reject callback.

// function MyPromisePlyfill(executor) {
//     let onResolve, onReject;

//     this.then = function (callback) {
//         onResolve = callback;
//         return this;
//     }
//     this.catch = function (callback) {
//         onReject = callback;
//         return this;
//     }

// }

//Part two :
//let executor = (resolve, reject) => setTimeout(() => resolve(1000), 1000);

//executor function which we will be executed that will either invoke resolve
// or reject depending on the status of async operation.

//We define our resolve callback function passed as an argument to executor.
// It is the callback function passed to then which we stored in onResolve variable.

// function MyPromisePlyfill(executor) {
//     let onResolve,
//         onReject,
//         fullfilled = false,
//         rejected = false,
//         called = false,
//         value;

//     function resolve(val) {
//         fullfilled = true;
//         value = val;
//         if (typeof onResolve === 'function') {
//             onResolve(value);
//             called = true;
//         }
//     }

//     function reject(reason) {
//         rejected  = true;
//         value = reason;
//         if (typeof onReject === 'function') {
//             onReject(value);
//             called = true;
//         }
//     }

//     this.then = function (callback) {
//         onResolve = callback;
//         if (fullfilled && !called) {
//             console.log('inside then');
//             called = true;
//             onResolve(value);
//         }
//         return this;
//     }
//     this.catch = function (callback) {
//         onReject = callback;
//         if (rejected && !called) {
//             called = true;
//             onReject(value);
//         }
//         return this;
//     }
//     try {
//         executor(resolve, reject)
//     } catch (error) {
//         reject(error)
//     }
// }
// new MyPromisePlyfill((resolve) => setTimeout(() => resolve(1000), 1000)).then(val => console.log(val));
// new PromisePolyFill((resolve) => resolve(1000)).then(val => console.log(val))
// new MyPromisePlyfill((resolve) => Promise.resolve(resolve(1000)));

// const promise1 = new MyPromisePlyfill((resolve, reject) => {
//     console.log(1)
//     setTimeout(() => {
//         resolve(2)
//       }, 1000);
//     console.log(3)
//   })

//   promise1.then(res => {
//     console.log(res)
//   });
