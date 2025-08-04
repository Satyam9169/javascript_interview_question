// console.log('start');

// setTimeout(()=> {
//    console.log('inside the (task queue)');
// task queue
// }, 0)

// Promise.resolve().then(() => {
//     console.log('inside promise micro-task')
// micro task queue (micrtask queue has high priority)
// });

// console.log('end');
// output :
// start
// end
// inside the (task queue)
// inside promise micro-task

// 2)

// blockMainThread();

// console.log('start')

// function blockMainThread(){
//     const start = Date.now();
//     while(Date.now() - start < 3000) {}
//     console.log('running...')
// }

// console.log('end')

// in this above code first it blocking the function
// blockMainThread and it is synchrounous code
// it will executed line by line
// start
// running
// end

// 3)
// setTimeout(()=> {console.log('a')}, 1000)
// setTimeout(()=> {console.log('b')}, 500)
// setTimeout(()=> {console.log('c')}, 0)

// function d() {console.log('d')}
// d()

// first will print d
// second will print c, then b, and a
// those have high mili sedcond will executed later

// 4)

// function a() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, 0)
//     }
// }
// a()

// it will added task queue : 3,3,3
// var have gloal scope:
// In JavaScript, the value of i printed
// inside the setTimeout function depends
// on its reference, not its value.

// 5)

// function a() {
//     for (let i = 0; i < 3; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, 0)
//     }
// }
// a()

// let have block scope
// it wil printed 0,1,2

// 6)
// Promise.resolve()
// .then(function a() {
//     Promise.resolve().then(function d(){
//         console.log('d runs')
//     });
//     Promise.resolve().then(function e(){
//         console.log('e runs')
//     });
//     throw new Error('Error Occured!')

//     Promise.resolve().then(function f(){
//         console.log('f runs')
//     })
// })
// .catch(function b(){
//     console.log('b runs')
// }).then(function c(){
//     console.log('c runs')
// })

// MicroTask queue - d() e() b() e()
// Call Stack - a()
// whenever a() will in microtask queue then
// when it executed then go in call stack a()
// after then it will go in microtask queue
// like this d() => e() => after it will get error
// then it will move to catch block which is b() bcz it return promise
// after then it will to in c() it also return promise
// so it wil beocme the series d() => e() => b() => e()

// output :
// d runs
// e runs
// b runs
// c runs

// Promise.resolve()
// .then(function a() {
//     Promise.resolve().then(
//         setTimeout(
//         function d(){
//         console.log('d runs')
//     }, 0));
//     Promise.resolve().then(function e(){
//         console.log('e runs')
//     });
//     throw new Error('Error Occured!')

//     Promise.resolve().then(function f(){
//         console.log('f runs')
//     })
// })
// .catch(function b(){
//     console.log('b runs')
// }).then(function c(){
//     console.log('c runs')
// })

// take queue: d()
// microtask queue:  e(), b(), c()
// call stack :
// when ever promise will resolve first a() will go in microtask queue
// when a will execute then d() will go in task queue
// then e() will go in microtask queue
// it will through error but this step is ignored it
// bcz jo execution vala part he use function ko run krega
// sometime it go task queue and microtask queue
// after then b() and c() will inside in micrtask queue
// bcz they both are return promise
//  output
// e runs
// b runs
// c runs
// d runs

// 7)
function pause(millis) {
  return new Promise(function p(resolve) {
    setTimeout(function s() {
      resolve("resolved");
    }, millis);
  });
}

const start = Date.now();
console.log("Start");

pause(1000).then((res) => {
  const end = Date.now();
  const secs = (end - start) / 1000;
  console.log(res, ":", secs);
});

// fist "start" will executed
// then first pause will go inside in call stack
// p() is also go in call stack
// s() will go in task queue
// from call stack first p will execute after then pause
// when s will get executed it will go in call stack
// at the same time callback then it will added in microtask queue
// their s will executed with resolve and in then will recieve the "resolved"
// then anonymous will come in callstack
// then after some second give the aswer
// resolved

// output
// start
// resolved : 1.005 second

a = 5 + "9";
document.write(a);
