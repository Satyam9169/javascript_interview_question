// Promise.all() → if one promise fails, the whole operation fails.
// Promise.allSettled() → waits for all promises, whether they succeed or fail.

// const users = Promise.resolve('user fetched');
// const products = Promise.resolve('products fetched');
// const orders = Promise.resolve('order fetched');

// Promise.all([users, products, orders])
// .then(res=> console.log(res)).catch(error => console.log('API is failing', error))

// The results are returned in the same order as the promises.

// What happens if one fails?
// const users = Promise.resolve('userFetched');
// const products = Promise.reject('Products API IS fAILED');
// const order = Promise.resolve('orderFetched');

// Promise.all([users, products, order])
//     .then((res) => console.log(res))
//     .catch((error) => console.error('Error : ', error))


// Even though users and orders succeeded, Promise.all() goes to catch() because one promise rejected.

// Real React/API example














