//*********** small concept SHADOWING of var and const *********

// Shadowing: Now, when a variable is declared in a certain scope 
// having the same name defined on its outer scope and when we call
// the variable from the inner scope, the value assigned to the variable
// in the inner scope is the value that will be stored in the variable in
// the memory space. This is known as Shadowing or Variable Shadowing. In 
// JavaScript, the introduction of let and const in ECMAScript 6 along with
// block scoping allows variable shadowing.

// function func() {
// 	let a = 'Geeks';
	
// 	if (true) {
// 		let a = 'GeeksforGeeks'; // New value assigned
// 		console.log(a); 
// 	}
	
// 	console.log(a); 
// }
// func();


// var a = 100;
// var a = 1000;
// : we can redeclare the variable within the same scope

// let a = 100;
// let a = 1000

// : we cannot redeclared the varaible within the same scope in case of varable
// error: Uncaught SyntaxError: Identifier 'b' has already been declared

// *****************************************************************************************
// LET'S TALK ABOUT THE SCOPE VARAIBLE 

// 1) only a is accessible from because var is global
// from let and const gives us error: a is not defined : var and const is block scope

// {
//     const a = 10;
// }
// console.log(a);

// Let's talk about shadowing 
// 1) Legal shadowing : variable showding
// in case var because: it is global and function scope

// var someVariable = 100;
// {
    // block scope
    // var someVariable = 1000;
    // in case of var here we have redeclare the someVariable so it will become global scope and still for outer scope
//     console.log(someVariable);
// }
// console.log(someVariable);

// output : 1000
//        : 1000

// in case of let

// let someVariable = 100;
// this outer scope variable with let 
// will work for only outer scope not for inner
// {
//     let someVariable = 1000;
    // this is block scope 
    // we have redeclared the variable above but this will work
    // only for the within the scope
//     console.log(someVariable);
// }
// console.log(someVariable);
// output: 100
//       : 1000

// SAME CASE IS HAPPEN WITH CONST KEYWORD


//*******************************ILLEGAL SHADOWING**************************************** */

// Illegal Shadowing: Now, while shadowing a variable, it should not cross
// the boundary of the scope, i.e. we can shadow var variable by let variable
// but cannot do the opposite. So, if we try to shadow let variable by var variable,
// it is known as Illegal Shadowing and it will give the error as “variable is already defined.” 


// function func() {
// 	var a = 'Geeks';
// 	let b = 'Geeks';
	
// 	if (true) {
// 		let a = 'GeeksforGeeks'; // Legal Shadowing
// 		var b = 'Geeks'; // Illegal Shadowing
// 		console.log(a); // It will print 'GeeksforGeeks'
// 		console.log(b); // It will print error
// 	}
// }
// func();

// output : Uncaught SyntaxError: Identifier 'b' has already been declared

// Note: Arrow functions also follow the same scope and variable shadowing rule.


// console.log(count);
// let count1 = 1;
// count1 is in temporal deadzone
// tempoeal deadzone is the time between declaration and intialization with let anc const keyword varaible
// var count2 = 2; 
// count2 will take place in global space

// ex:

// function a(){
//     console.log(a);
//     var a = 10;
// }

// a()

// a = undefined  : because a is not initialize the variable yet


// function a(){
//     console.log(a, b, c);

//     const c = 10;
//     let b = 20;
//     var a = 10;

// }

// a()

// output: Uncaught ReferenceError: Cannot access 'b' before initialization
// b and c are in temporal deadzone they are in the scope but variable is being declare yet
// b and c mean let and const is going to hoisted in
// temporal deadzone



















