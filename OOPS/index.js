const student = {
    myName: 'satyam agrahari',
    age: 25,
    passion: 'coding',
    greet: greetStudent
    // greet: function(){
    //     console.log(this)
    //     console.log(`Hello, my name is ${this.myName} and I am ${this.age} years old, I love ${this.passion}`)
    // }
}


const student2 = {
    myName: 'shivam agrahari',
    age: 26,
    passion: 'reading',
    greet: greetStudent
    // greet: function(){
    //     console.log(this)
    //     // console.log(`Hello, my name is ${this.myName} and I am ${this.age} years old, I love ${this.passion}`)
    // }
}

const student3 = {
    myName: 'sudaram agrahari',
    age: 27,
    passion: 'problem solving',
    greet: greetStudent
    // greet: function(){
    //     console.log(this)
    //     // console.log(`Hello, my name is ${this.myName} and I am ${this.age} years old, I love ${this.passion}`)
    // }
}

function greetStudent() {
    console.log(`Hi my name is ${this.myName} and i am ${this.age} years old, i love ${this.passion}`)
}

student.greet()
student2.greet()
student3.greet()