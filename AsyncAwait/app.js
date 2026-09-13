// async function fetchWeather() {
//     let bangaloreWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('bangalore weather is 25deg');
//         }, 2000);
//     });

//     let DelhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Delhi weather is 28deg');
//         }, 5000);
//     });

//     const b = await bangaloreWeather;
//     console.log('fetched bangalore weather ', b);
//     const d = await DelhiWeather;
//     console.log('fetched delhi weather ', d);
//     return [b, d];
// }

// let a = fetchWeather();
// a.then(value => {
//     console.log(value);
// });


console.log('start');
for(let i = 0; i < 5; i++){
    setTimeout(()=> {
        console.log(`i am calling after ${i}`);
    }, i * 1000)
}
setTimeout(()=>{
    console.log('end');
},5000)
