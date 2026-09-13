// let incrementBtn = document.querySelector(".increment_btn");
// let increment_pressed = document.querySelector(".increment_pressed");
// let count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// This is for the debouncing
// it called for fixed certain timePeriod
// const myDebounce = (cb, d) => {
//   let timer = null;
//   return function (...arg) {
//     console.log("Current timeoutId before clearing:", timer);
//     if (timer) clearTimeout(timer);
//     console.log("timeoutId after clearing:", timer);
//     timer = setTimeout(() => {
//       console.log("timeoutId before calling cb:", timer);
//       cb(...arg);
//     }, d);
//   };
// };

// const debounceCount = myDebounce(() => {
//   triggerCount += 1;
//   count.innerHTML = triggerCount;
// }, 800);

// incrementBtn.addEventListener("click", () => {
//   increment_pressed.innerHTML = ++pressedCount;
//   debounceCount();
// });

// **********HOW DEBOUNCE IS WORKING*****************

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var triggerCount = 0;
var pressedCount = 0;

const start = new Date().getTime();

const myThrottle = function (cb, d) {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

var throttle = myThrottle(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 1000);

// var throttled = _.throttle(() => {
//   triggerCount += 1;
//   count.innerHTML = triggerCount;
// }, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = pressedCount++;
  const now = new Date().getTime();
  const seconds = (now - start) / 1000;
  console.log(seconds.toFixed());
  // throttled();
  throttle()
});

// this is using inbuilt function lodash
// const throttledCount = _.throttle(() => {
//     const now = new Date().getTime();
//     console.log(now - start);
//     count.innerHTML = ++triggerCount;
// }, 1000)
