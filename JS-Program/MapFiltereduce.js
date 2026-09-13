const users = [
    {firstName: 'amar', lastName: 'jeet', age: 26},
    {firstName: 'anuj', lastName: 'chauhan', age: 27},
    {firstName: 'sunil', lastName: 'yadav', age: 28},
    {firstName: 'gaurav', lastName: 'gupta', age: 27},

]


const output = users.filter(item =>  item.age > 26).map(item => item.firstName)
console.log(output);



// const arr = [1,2,3,4,5]; 

// const answer = arr.map(item => item * 2)
// const answer = arr.filter(item => item >= 2 && item <= 4)
// const answer = arr.reduce((acc, current) => acc + current, 0)
// console.log(answer);