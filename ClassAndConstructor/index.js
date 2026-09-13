// class and constructor

// class Student{
//     constructor(f_name, l_name, present = 0){
//         this.f_name = f_name;
//         this.l_name = l_name;
//         this.countStudent = present;
//     }
//     intro(){
//         return `student first name is ${this.f_name} and last name is ${this.l_name}`
//     }

//     attendence(){
//         this.countStudent++
//         return `Roll no ${this.countStudent} is present`;
//     }
// }

// const student = new Student('satyam', 'agrahari')
// console.log(student)
// console.log(student.attendence())
// console.log(student.intro())

// convertnig to function constructor

// function Student(f_name, l_name, present = 0){
//     this.f_name = f_name;
//     this.l_name = l_name;
//     this.countStudent = present;
// }

//  Student.prototype.intro = function(){
//     return `student first name is ${this.f_name} and last name is ${this.l_name}`
// }

//  Student.prototype.present = function(){
//     this.countStudent++
//     return `Roll no ${this.countStudent} is present`;
// }

// const student = new Student('satyam', 'agrahari')
// console.log(student)
// console.log(student.intro())
// console.log(student.present())

// INHERITANCE
// class Student {
//     constructor(f_name, l_name, present = 0) {
//         this.f_name = f_name;
//         this.l_name = l_name;
//         this.countStudent = present;
//     }
//     intro() {
//         return `student first name is ${this.f_name} and last name is ${this.l_name}`;
//     }

//     attendence() {
//         this.countStudent++
//         return `Roll no ${this.countStudent} is present`;
//     }
// }

// class Teacher extends Student {
//     constructor(f_name, l_name, present, total_student) {
//         super(f_name, l_name, present)
//         this.total_student = total_student;
//     }

//     static paidCourse() {
//         console.log(this.total_student);
//         return new Teacher('satyam', 'agrahari', 0, 60)
//     }

//     Total() {
//         return `Total students presents in the class ${this.total_student}`;
//     }
// }

// const newTeacher = new Teacher('satyam', 'agrahari', 0, 60)
// console.log(newTeacher)
// console.log(newTeacher.Total())
// console.log(newTeacher.intro())
// console.log(newTeacher.attendence())

// ----------- Interview Questions on Class and Constructors -----------

// Question 1 - Explain the difference between a class and an object in JavaScript.

/**************CLASS********************** */
// Answer: A class is a blueprint or template for creating objects. It defines
// the properties (data) and methods (functions) that the objects created from the class.


/**************OBJECT********************** */
// Object : An object is an instance of a class. Once you define a class, you can create objects based
// on that class.
// Objects have their own set of properties and methods as defined by the class, and they can also hold additional
// properties unique to the object.

// Objects are instances of classes that possess properties and methods defined by the class.

// Question 2 - What’s the Output?
// class Rectangle {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }

//     area() {
//       return this.width * this.height;
//     }
//   }

//   const square = new Rectangle(5, 5);
//   const rect = new Rectangle(4, 6);

//   console.log(square.area()); // 25
//   console.log(rect.area()); // 24

// Question 3 - How does inheritance work in JavaScript classes?
// Answer: Inheritance in JavaScript classes is achieved using the extends keyword.
// It allows a sub class(child class) to inherit properties and methods from a
// super class (parent class).

// Question 4 - What’s the Output?
// class Employee {
//    constructor() {
//      this.name = "John";
//    }
//    constructor() {
//      this.age = 30;
//    }
//  }

//  var employeeObject = new Employee();
// console.log(employeeObject.name);

// Solution - Uncaught SyntaxError: A class may only have one constructor

// Question 5 - Which approach is better and why?

// const jamesbond = {
//     firstName: "Roadside",
//     lastName: "Coder",
//     getFullName: function () {
//       return `${this.firstName} ${this.lastName}`.trim();
//     },
//   };

//   jamesbond.getFullName();

// or

//   class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
//   }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`.trim();
// }

//   const jamesBond = new Person("Roadside", "Coder");
//   jamesBond.getFullName();

// Solution -
// Second approach is better since in the first approach, a closure is maintained
// for each copy of the object containing getFullName method.While in the second approach,
// the method is registered in the prototype rather than in every object.
// Thus, it is a more memory efficient approach.


//   class Calculator {
//     constructor() {
//       this.result = 0;
//     }

//     add(num) {
//       this.result += num;
//       return this;
//     }

//     subtract(num) {
//       this.result -= num;
//       return this;
//     }

//     multiply(num) {
//       this.result *= num;
//       return this;
//     }

//     divide(num) {
//       if(num !== 0){
//         this.result /= num
//       }else{
//         console.log('it cannot divisible')
//       }
//       return this;
//     }

//     getResult() {
//       return this.result;
//     }
//   }

//   const calc = new Calculator();
//   const result = calc.add(10).subtract(5).multiply(2).divide(4).getResult();
// console.log(result); // 2.5


// Question 7 - Inheritance and Polymorphism
// Implement a `Shape` class with an `area()` method.
// Create subclasses `Circle` and `Square` that inherit from `Shape` and override the
// `area()` method to calculate their respective areas.

// class Shape {
//     area() {
//         return 0;
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super()
//         this.radius = radius;
//     }
//     area() {
//         return Math.PI * this.radius ** 2;
//     }
// }

// class Square extends Shape {
//     constructor(side) {
//         super()
//         this.side = side;
//     }
//     area(){
//         return this.side ** 2;
//     }
// }

// const circleArea = new Circle(4);
// const squareArea = new Square(5);

// console.log(circleArea.area());
// console.log(squareArea.area());



// Question 8 - What are Getters and Setters in JS?
// Getters and setters are methods used to control access to the properties of a class.

// class Student {
//     constructor(f_name, l_name, present = 0) {
//         this.f_name = f_name;
//         this.l_name = l_name;
//         this.total = 45;
//     }

//     fullName() {
//         return `student name is ${this.f_name + " : " + this.l_name}`;
//     }

//     Total() {
//         this.total;
//         return `The total students are in the class ${this.total}`;
//     }

//     get totals() {
//         return this.total;
//     }

//     set totals(present) {
//         if (present < 0) throw new Error('Number is must be grater than 0')
//         else {
//             this.total = present;
//         }
//     }
// }

// const student = new Student('satyam', 'agrahari');
// console.log(student)
// console.log(student.Total())
// console.log(student.intro())