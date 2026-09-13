// Compose and Pipe

const addFive = (num) => {
  return num + 5;
};

const subtractTwo = (num) => {
  return num - 2;
};

const multiplyFour = (num) => {
  return num * 4;
};

const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5));

function compose(...fns) {
  return function (args) {
    let init = args;
    for (let i = fns.length - 1; i >= 0; i--) {
      init = fns[i](init)
    }
    return init;
    // 2nd method
    //     let result = fns.reduceRight((acc, curr) => curr(acc), args);
    //     return result;
  }
}

const evaluatePipe = pipe(addFive, subtractTwo, multiplyFour);
console.log(evaluatePipe(5));

function pipe(...fns) {
  return function (args) {
    let result = fns.reduce((acc, curr) => curr(acc), args);
    return result;
  }
}

