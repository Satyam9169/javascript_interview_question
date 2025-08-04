// 1st example

function delay(ms) {
    return new Promise(resolve => {setTimeout(resolve, ms)})
}

const AsyncFun = async () => {
    console.log('Start');

    await delay(2000)
    console.log("Two second has passed");

    await delay(1000)
    console.log("another second has passed");

    return "done";
}

AsyncFun()
.then(result => {
    console.log(result);
    console.log("Async function completed")
})
.catch(error=> {
    console.error("An error occurred", error)
})



// 2nd example
// const after2Second = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Process Resolved ");
//     }, 1000);
//   });
// };

// const AsyncCall = async () => {
//   console.log("start calling");
//   for (let index = 1; index <= 5; index++) {
//     console.log("I am calling after " + index + " second");
//     const result = await after2Second();
//     console.log(result);
//   }
//   console.log('End call');
// };

// AsyncCall();

// const getData = async() => {
//   const y = await "Hello World!!";
//   console.log(y);
// }

// getData()



// const delay = (ms) => {
//   return new Promise((resolve) => {
//     console.log(resolve, ms);
//   });
// };

// const countNumber = async () => {
//   console.log("start counting");

//   for (let index = 1; index <= 5; index++) {
//     await delay(1000);
//     console.log(index);
//   }

//   console.log("finish counting");
// };

// console.log(countNumber());


// function isPrime(number) {
//     if (number < 2) {
//       return false;
//     }
  
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   async function checkIfPrime(number) {
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating an asynchronous operation
//     return isPrime(number);
//   }
  
//   async function verifyPrimeNumbers(numbers) {
//     try {
//       const results = await Promise.all(numbers.map(number => checkIfPrime(number)));
//       numbers.forEach((number, index) => {
//         console.log(`${number} is ${results[index] ? 'prime' : 'not prime'}`);
//       });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   const numbersToCheck = [5, 10, 13, 20, 23];
//   verifyPrimeNumbers(numbersToCheck);
  
// const delay = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// const processItem = async (item) => {
//     await delay(Math.random() * 2000)
//     console.log('Processed : ', item);
// }

// const runParallelLoops = async() => {
//     const items = ['A', 'B', 'C', 'D', 'E']

//     const promises = items.map(item => processItem(item))
//     await Promise.all(promises)

//     console.log('All items processed');
// }

// runParallelLoops()

