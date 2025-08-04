/*
********DOM(Document Object Model)***********
HTML DOM (Document Object Model) is a hierarchical representation of HTML documents.
It defines the structure and properties of elements on a webpage, enabling JavaScript
to dynamically access, manipulate, and update content, enhancing interactivity and functionality.

DOM Property
1) Window Object : Window Object is object of the browser which is always at top of the hierarchy.
  It is like an API that is used to set and access all the properties and methods of the browser. 
  It is automatically created by the browser.

2) Document object: When an HTML document is loaded into a window, it becomes a document object. 
The ‘document’ object has various properties that refer to other objects which allow access to and 
modification of the content of the web page. If there is a need to access any element in an HTML page,
we always start with accessing the ‘document’ object. Document object is property of window object.

3) Form Object: It is represented by form tags.

4) Link Object: It is represented by link tags.

5) Anchor Object: It is represented by a href tags.

6) Form Control Elements: Form can have many control elements such as text fields, buttons, radio buttons, 
   checkboxes, etc.  

DOM Document Object Model
1) If you want to access any element in an HTML page, you always start with accessing the document object.
DOM Method
Method	                                       Description
document.getElementById(id)	                   Find an element by element id
document.getElementsByTagName(name)	           Find elements by tag name
document.getElementsByClassName(name)	       Find elements by class name


Changing HTML Elements

Property	                                            Description
element.innerHTML =  new html content	                Change the inner HTML of an element
element.attribute = new value	                        Change the attribute value of an HTML element
element.style.property = new style	                    Change the style of an HTML element
Method	Description
element.setAttribute(attribute, value)	                Change the attribute value of an HTML element


                            Adding and Deleting Elements
Method	                                               Description
document.createElement(element)	                       Create an HTML element
document.removeChild(element)	                       Remove an HTML element
document.appendChild(element)	                       Add an HTML element
document.replaceChild(new, old)	                       Replace an HTML element
document.write(text)	                               Write into the HTML output stream


Adding Events Handlers
Method	Description
document.getElementById(id).onclick = function(){code}
*/

// let el = document.createElement('div')
// console.log(el);
// console.dir(el);
// let container = document.querySelector('h1');
// console.log(container);
// console.dir(container);

// container.innerText = container.innerText + ` Currently I'm learning JavaScript !!`;

// let box = document.querySelectorAll('.box');

// box[0].innerText =  "HELLO SIR 1!!"
// box[1].innerText = 'HELLO SIR 2!!'
// box[2].innerText = 'HELLO SIR 3!!'

// let id = 0;
// for(boxes of box){
//     boxes.innerText = `Hi I'm from ${id}`
//     id++;
// }
// console.log(box);

// let div = document.querySelector('div');
// console.log(div);

// let id = div.getAttribute('id');
// console.log(id);

// let name = div.getAttribute('name');
// console.log(name);

// let para = document.querySelector('p');
// let ptag = para.getAttribute('class');
// console.log(ptag, para.setAttribute("class", 'Hi'));

// let div = document.querySelector('div');
// div.style.backgroundColor = 'grey';
// div.style.color = "white";
// div.style.fontSize = '20px'
// div.innerText = 'Hi, This is DOM manupulation!!'

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hello, I'm from h1 tag</i>"
// document.querySelector("body").prepend(newHeading);

// para.remove()

// CREATE A NEW BUTTON AND ADD SOME STYLING IN BUTTON and ABOUT ATTRIBUTES

// let btn = document.createElement("button");
// btn.innerText = 'click me'
// btn.style.color = "white";
// btn.style.backgroundColor = 'skyblue';

// document.querySelector('body').prepend(btn)

// let para = document.querySelector('p')

// let getAttbt = para.getAttribute('class');
// console.log(getAttbt);
// //'para'

// let attrbt = para.setAttribute('class', 'paragraph')
// console.log(attrbt);

// let add = para.classList.add('newClass')
// console.log(add);

// console.log(para.classList)

// let rmv = para.classList.remove('newClass')
// console.log(rmv);

// let btn1 = document.querySelector("#btn");

// btn1.onclick = (event) => {

//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
//     console.log(event.clientX, event.clientY);
// console.log('btn1 was clicked!!');
// let a = 25;
// a++;
// console.log(a);
// }

// btn1.onclick = () => console.log('I can override from this event');

// let div = document.querySelector('div');
// div.onmouseover = (e) => {
//     console.log("you are inside div");
//     console.log("this is event of inside mouseover");
// }1

// EVENT HANDLER
// btn1.addEventListener('click', (event) => {
//     console.log("button1 was clicked!!");
// console.log(event);
// console.log(event.type);
// })

// const handler2 = () => {
//     console.log('button was clicked - handler2');
// }

// btn1.removeEventListener('click', handler2);

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    // document.querySelector('body').style.backgroundColor = 'black';
  } else {
    currMode = "light";
    // document.querySelector('body').style.backgroundColor = "white"
  }
  console.log(currMode);
});
