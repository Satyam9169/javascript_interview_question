// for call method
// function saySomething() {
//     return "Hello " + this.name;
// }

// let obj = {name : "satyam"}
// console.log(saySomething.call(obj));

// for apply method
// function saySomething(message) {
//     return this.name + " is " + message;
// }

// let obj = {name : "Satyam"}


// console.log(saySomething.apply(obj, ["aswsome"]));


// for bind 
let bikeDetails = {
    displayDetails : function(brandName, regNo) {
        return "Name : " + this.name + " \n" + "BikeDetails : " + brandName + " , " + regNo;
    }
}

let person1 = {name : "Satyam"};

let displayofPerson1 = bikeDetails.displayDetails.bind(person1, "bullet", "T102TY")

console.log(displayofPerson1());
