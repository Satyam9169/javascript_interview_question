1. Object Creation Methods
Q1) Different ways to create objects in JavaScript?
// 1. Object Literalconst user = {  name: "Satyam",  age: 25};// 2. Object Constructorconst obj = new Object();// 3. Constructor Functionfunction Person(name) {  this.name = name;}const p1 = new Person("John");// 4. Classclass Employee {  constructor(name) {    this.name = name;  }}// 5. Object.create()const person = {  greet() {    console.log("Hello");  }};const student = Object.create(person);

2. Important Object Methods
Object.keys()
Q2) What is Object.keys()?
Returns all keys in array format.
const user = {  name: "Satyam",  age: 25};console.log(Object.keys(user));
Output:
["name", "age"]

Object.values()
Q3) What is Object.values()?
Returns all values.
console.log(Object.values(user));
Output:
["Satyam", 25]

Object.entries()
Q4) What is Object.entries()?
Converts object into key-value array.
console.log(Object.entries(user));
Output:
[  ["name", "Satyam"],  ["age", 25]]

Object.fromEntries()
Q5) What is Object.fromEntries()?
Converts array back into object.
const arr = [  ["name", "Satyam"],  ["age", 25]];console.log(Object.fromEntries(arr));

Object.assign()
Q6) What is Object.assign()?
Used to merge/copy objects.
const obj1 = { a: 1 };const obj2 = { b: 2 };const result = Object.assign({}, obj1, obj2);console.log(result);

Object.freeze()
Q7) What is Object.freeze()?
Cannot add/update/delete properties.
const user = {  name: "Satyam"};Object.freeze(user);user.name = "Rahul";console.log(user.name);
Output:
Satyam

Object.seal()
Q8) Difference between freeze() and seal()?
const user = {  name: "Satyam"};Object.seal(user);user.name = "Rahul"; // alloweddelete user.name;    // not alloweduser.age = 25;       // not allowed
Difference
MethodUpdateAddDeletefreeze❌❌❌seal✅❌❌

hasOwnProperty()
Q9) What is hasOwnProperty()?
Checks property exists or not.
const user = {  name: "Satyam"};console.log(user.hasOwnProperty("name"));
Output:
true

Optional Chaining
Q10) What is Optional Chaining?
Avoids undefined errors.
const user = {  address: {    city: "Bangalore"  }};console.log(user?.address?.city);console.log(user?.company?.name);

Destructuring
Q11) What is Object Destructuring?
const user = {  name: "Satyam",  age: 25};const { name, age } = user;console.log(name);

Spread Operator
Q12) Object Spread Operator?
const obj1 = { a: 1 };const obj2 = { b: 2 };const result = {  ...obj1,  ...obj2};console.log(result);

Deep Copy vs Shallow Copy
Q13) Difference?
Shallow Copy
const user = {  name: "Satyam",  address: {    city: "Bangalore"  }};const copy = { ...user };copy.address.city = "Delhi";console.log(user.address.city);
Output:
Delhi

Deep Copy
const deepCopy = structuredClone(user);
OR
const deepCopy = JSON.parse(JSON.stringify(user));

this keyword in object
Q14) Explain this keyword
const user = {  name: "Satyam",  greet() {    console.log(this.name);  }};user.greet();

for...in loop
Q15) Difference between for...in and for...of?
for...in
Used for objects.
const user = {  name: "Satyam",  age: 25};for (let key in user) {  console.log(key, user[key]);}

for...of
Used for iterable arrays/strings.
const arr = [1, 2, 3];for (let value of arr) {  console.log(value);}

Object Comparison
Q16) Why object comparison returns false?
console.log({} === {});
Output:
false
Because objects compare by reference, not value.

Delete Operator
Q17) delete operator?
const user = {  name: "Satyam",  age: 25};delete user.age;console.log(user);

Object Chaining Output Question
Q18) Output?
const obj = {  a: 1};const b = obj;b.a = 100;console.log(obj.a);
Output:
100
Because both point to same reference.

Tricky Interview Question
Q19) Output?
const obj = {  name: "Satyam",  getName() {    return this.name;  }};const fn = obj.getName;console.log(fn());
Output:
undefined
Because this is lost.

Fix this problem
const fn = obj.getName.bind(obj);console.log(fn());

Object.entries Real Interview
Q20) Convert object into array?
const user = {  name: "Satyam",  age: 25};const result = Object.entries(user);console.log(result);

Frequently Asked Scenario Questions
Q21) How to check empty object?
const obj = {};console.log(Object.keys(obj).length === 0);

Q22) How to clone object?
const clone = { ...obj };
OR
const clone = Object.assign({}, obj);

Q23) How to iterate object?
Object.keys(obj).forEach(key => {  console.log(key, obj[key]);});

Most Important Output Questions
Q24)
const obj = {  name: "Satyam"};Object.freeze(obj);obj.name = "Rahul";console.log(obj.name);
Output:
Satyam

Q25)
const obj = {  a: 1};const copy = obj;copy.a = 50;console.log(obj.a);
Output:
50

Advanced MNC Questions
Q26) Difference between Map and Object?
ObjectMapKeys are string/symbolAny datatype keyNot iterable directlyIterableBetter for static dataBetter for dynamic data

Q27) What is prototype inheritance?
const parent = {  greet() {    console.log("Hello");  }};const child = Object.create(parent);child.greet();

VERY IMPORTANT FOR INTERVIEW
Commonly Asked


freeze vs seal


shallow vs deep copy


object reference


this keyword


destructuring


optional chaining


object cloning


Object.keys / values / entries


Map vs Object


prototype inheritance


bind/call/apply


spread operator



Top 10 Rapid Fire Questions


1) Can objects have duplicate keys?


2) Difference between == and === in objects?


3) Why {} === {} false?


4) What is shallow copy?


5) What is deep copy?


6) Difference between seal and freeze?


7) How to merge objects?


8) How to iterate object?


9) Difference between Object and Map?


10) What is prototype chain?

