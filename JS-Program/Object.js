// const person = {
//     f_Name: "John",
//     L_Name: "doe",
//     id: 5556,
//     fullName: function(){
//         return this.f_Name + " " + this.L_Name;
//     }
// }

// console.log(person.fullName());

// document.getElementById("students").innerHTML = person.fullName();
let x = "";
const myObj = {
    name: "john",
    age: 30,
    cars : [
        {name: "BMW", models:["fiesta", "Focus", "Mustang"]},
        {name: "Ford", models:["320", "X3", "X5"]},
        {name: "Fait", modales:["500", "Panda"]}
    ]
}

let y = "";
for(let i in myObj.cars){
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for(let j in myObj.cars[i].models){
        x += myObj.cars[i].models[j] + "<br>";
    }
}

// document.getElementById('students').innerHTML = x;

console.log(x);










// const person = {
//     name: "satyam",
//     age: 26,
//     mobile: 9169184165,
// }

// let text = "";
// for(let x in person){
//     text += person[x] + " "
// }
// console.log(text);