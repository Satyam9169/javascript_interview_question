// var car1 = {
//     name: 'Honda City',
//     manufactoring: 'Honda',
//     fuelCapacity: 40,
//     isAutometic: false,
//     getKnow: function () {
//         console.log('HI i am from amethi, UP');
//     }
// }

// // console.log(car1.getKnow())
// var car2 = {
//     name: 'Sonet',
//     mamufactoring: 'kia',
//     fuelCapacity: 45,
//     isAutometic: true
// }

// var obj = {
//     key1: "value1",
//     key2: 'value2',
// }

// console.log(car1['name'], car1.isAutometic);

// by using literal
// car1.color = 'red';
// console.log(car1)

// Object using new kayword
// var myDetails = new Object();
// myDetails.name = 'satyam',
// myDetails.title = 'software engineer',
// myDetails.expertise = ['#Frontend', '#React developer']
// myDetails.greetMe = function(){
//     console.log('Hello from india- learning express');
// }
// console.log(myDetails)

// using constructor to create the object
// function Course(instructor, title, description, language, duration, fees, startDate, YoutubeLink) {
//     this.instructor = instructor;
//     this.title = title;
//     this.description = description;
//     this.language = language;
//     this.duration = duration;
//     this.fees = fees;
//     this.startDate = startDate;
//     this.YoutubeLink = YoutubeLink;
// }


// var JavascriptCourse = new Course(
//     'satyam agrahari',
//     'javascript foundation',
//     'Javasript programming language',
//     'Hinenglish',
//     10,
//     'free',
//     '5 april 2023',
//     'https://www.youtube.com/learningexpress'
// )

// for(key in JavascriptCourse){
//     console.log(key);
// }

// delete JavascriptCourse.description

// console.log(JavascriptCourse)
// console.log(Object.keys(JavascriptCourse)) // with the help of key we can get the key of the object
// console.log(Object.values(JavascriptCourse)) // we can get the all value from object
// Object.freeze(JavascriptCourse); // when we defined freez method we cannot modify in the data
// JavascriptCourse.description= "Hi i am from the india";
// console.log(JavascriptCourse);

// Object.seal(JavascriptCourse); // with the help of seal method we can only modify existing data we can't add the new object
// JavascriptCourse.duration = 11;
// JavascriptCourse.notes = 'javascript notes are available';
// console.log(JavascriptCourse);

// ******INTERVIEW QUESTION*******
// 1)
// const user = {
//     name: 'satyam agrahari',
//     age: 24,
// }

// user.name = 'Rishabh musafirkhana'; // this way we can change the name
// delete user.age // this way we can delete the value 
// console.log(user)

// 2)

// const user = (function(a){
//     delete a; // we can't delete the a because this a is not comming from object
//     // this is also comes under local block
//     return a;
// })(5)
// console.log(user)

// 3)

// const user = {
//         name: 'satyam agrahari',
//         age: 24,
//         'musafirkhana' : true,
// }

// console.log(user['musafirkhana']);
// delete user['musafirkhana'] // this way we can delete user
// console.log(user); // we can print this way original object

// 4) 
// How to print key and it's value through for loop itereator

// const user = {
//     name:'satyam agrahari',
//     age: 25,
//     location: 'musafirkhana'
// }

// for(key in user){
//     console.log(key); // for printng key
//     console.log(key + " : " +user[key]); // for printing the value
// }

//  5)
// output based question
// const obj = {
//     a : "one",
//     b : "two",
//     a : "three" // last a value will print with b only not beginning of a
// }

// console.log(obj) 

// 6)
// create multiplybytwo() and multyply by 2 with each number in the given object
// const nums = {
//     a : 100,
//     b : 200,
//     title: 'my nums'
// }

// multiplyByTwo(nums);

// function multiplyByTwo(obj){
//     for(key in obj){
//     if(typeof obj[key] === 'number')
//         obj[key] *= 2;
//     }
// }
// console.log(nums);

// 7)
// const a = {}
// const b = {key: 'b'}
// const c = {key: 'c'}
// object can't converted in key unless it is string
// it is convert in object object also overlap the value
// a[b] = 10;
// a[c] = 20;

// console.log(a[b]);

// 8
// const user = {
//     name: 'satyam',
//     age: 24,
// }

// to convert in string
// console.log(JSON.stringify(user));
// to converted in back object

// const obj = JSON.stringify(user);
// localStorage.setItem("TestUser",obj)
// console.log(JSON.parse(obj));

// 9)
// this question is related to spread operator
// console.log([..."satyam"]);

// 10)
// const user = {name: 'Lydia', age: 25}
// const admin = {admin: true, ...user} 

// console.log(admin);

// 10)

// const setting = {
//     username: "Piyush",
//     level: 19,
//     health: 90
// };

// const data = JSON.stringify(setting, ['level', 'health']);
// console.log(data);


// 11)

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },

    // this function is depends upon the window object
//     perimeter: () => 2 * Math.PI * this.radius
// }

// console.log(shape.diameter());
// console.log(shape.perimeter());

// 12
// let user = {
//     name: 'satyam',
//     age: 25,
//     fullname: {
//         fname: 'Rishabh',
//         lname: 'agrahari'
//     }
// };

// const name = 'rishabh';
// const{name: myName} = user;
// const { fullname: { fname } } = user;
// console.log(fname); // Output: rishabh


// 13) output based question
// function getItem(fruitList, favoriteList, ...arg) {
//     console.log('fruitList', ...fruitList);
//     console.log('favoriteList', favoriteList);
//     console.log('...arg', ...arg);
//     return [...fruitList, ...arg, favoriteList];
// }

// console.log(getItem(["banana, apple"], "pear", "orange"));

// 14)
// let c = { greeting: 'Hey!!' };
// let d;
// here only we are providing reference of the
// c in d not complete object

// d = c;
// c.greeting = 'Hello!!';
// console.log(c.greeting);

//15)

// console.log({a:1} == {b:1});
// console.log({a:1} === {b:1});
// both are pointing to different memory
// they are independent

// 16)

// const value = { number: 10 };
// const multiyply = (x = { ...value }) => {
//     console.log((x.number *= 2));
// }

// multiyply(); // 20
// multiyply(); // 20
// multiyply(value); // 20
// multiyply(value); // 40


// 17)

// const changeAgeAndReference = (person) => {
//     person.age = 25;
//     person = {
//         name: 'John',
//         age: 20
//     }
//     return person;
// }

// const personObj1 = {
//     name: 'Alex',
//     age: 25
// }

// const personObj2 = changeAgeAndReference(personObj1);
// console.log(personObj2); 
// console.log(personObj1); 


// 18)
// SHALOW COPY
// const user = {
//     name: 'satyam agrahari',
//     age: 22
// }

// const cloneObj = Object.assign({}, user);
// cloneObj.name = 'Rishabh gupta';
// let user1 = user;
// user1.age = 23;
// console.log(user1, user);

// DEEP COPY

// const user = {
//     name: 'satyam agrahari',
//     age: 20
// }

// const cloneObj = JSON.parse(JSON.stringify(user));
// cloneObj.name = 'shivam'
// console.log(user, cloneObj);
















