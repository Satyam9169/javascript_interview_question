// So, let's see how we can write the same code using HOFs:
const radius = [1,2,3]

const Area = radius => Math.PI * radius * radius;
const diameter = radius => 2 * radius;
const calculate = (radius, logic) => {
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, Area));
console.log(calculate(radius, diameter));

/*
How Higher Order Functions Work
So, suppose I want you to write a function 
that calculates the area and diameter of a circle.
As a beginner, the first solution that comes to our
mind is to write each separate function to calculate 
area or diameter.
*/

/*
But have you noticed the problem with the above code? 
Aren't we writing almost the same function again and 
again with slightly different logic? Also, the functions
we have written aren't reusable, are they?
*/

// const radius = [1, 2, 3];

// const calculateArea = function(){
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }

// const calculateDiameter = function(){
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(2 * radius[i])
//     }
//     return output;
// }

// console.log(calculateArea(radius))
// console.log(calculateDiameter(radius))



// function callBackFunction() {
//     console.log('I am callback function')
// }

// function highOrderFunction(func){
//     console.log('I am higher order function');
//     func()
// }

// callBackFunction(highOrderFunction)
