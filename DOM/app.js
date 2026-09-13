/*
5 phases of dom manipulaiton

1. DOM
2. Selection of html element
3. Dom manipulation and how to change
4. CSS ko kaise change kar sakte he
5. Event Listener (event ko kaise suna jaayega)
*/

const h3 = document.querySelector('h3');
h3.innerHTML = "DOM TREE is connecting with each node and sibling and parent to child communication"

const h1 = document.querySelector('h1');
h1.style.backgroundColor = "green"

const p = document.querySelector('p');
p.addEventListener('click', () => {
    p.style.backgroundColor = 'blue'
})

const innerBox = document.querySelector('.inner')

const onButtoon = document.querySelector('.onButtoon');
onButtoon.addEventListener('click', () => {
    if (innerBox.style.backgroundColor === "yellow") {
        innerBox.style.backgroundColor = "green"
    } else {
        innerBox.style.backgroundColor = "yellow"
    }
})

// const offButtoon = document.querySelector('.offButtoon');
// offButtoon.addEventListener('click', () => {
//     innerBox.style.backgroundColor = "yellow"
// })

// BOM => Browser object model
const container = document.getElementById("container");

console.log(container.children)

console.log(container.childNodes)
console.log(container.childNodes[0].nodeType);   // 3
console.log(container.childNodes[0].nodeValue);  // Hello World

console.log(container.childNodes[1].nodeType);   // 8
console.log(container.childNodes[1].nodeValue);  // This is a comment

console.log(container.childNodes[3].nodeType);   // 1
console.log(container.childNodes[3].nodeName);   // P

container.childNodes.forEach(node => {
    console.log(
        "Type:", node.nodeType,
        "Name:", node.nodeName,
        "Value:", node.nodeValue
    );
});


//How to manipulate the HTML
const tagName = document.querySelector('h2');
// tagName.innerHTML = "BOM => BROWSER OBJECT MODEL"
// tagName.innerText = "BOM => BROWSER OBJECT MODEL"
// console.log(h2.innerHTML)
// console.log(tagName.innerText);
// console.log(tagName.innerHTML);

// inserting element
let div = document.getElementById("container");

let element = document.createElement("p");
element.innerHTML = "New Paragraph with prepend property";

// div.append(element)
div.prepend(element);

const heading = document.getElementById("heading");
const h1tag = document.createElement("h1");
h1tag.innerText = "Adding with before() element";

// heading.after(h1tag)
heading.before(h1tag)

// with replaceChild
const parent = document.getElementById('box')
console.log(parent.attributes)
console.log(parent.attributes.id)
// These three to get the class and id
console.log(parent.attributes["id"].value)
console.log(parent.attributes.id.value)
console.log(parent.getAttribute("id"))

// parent.setAttribute("class", "${class}random") // then we can manipulate according to the requirements
// it will replace with new attribute


const oldChild = document.getElementById('old');

let newChild = document.createElement('h1');
newChild.innerHTML = "The Text with replaceChild()"
newChild.style.border = "1px solid black"

parent.replaceChild(newChild, oldChild)

// CreatingAttribute and setAttribute
const honetag = document.createElement("h1");
const attribute = document.createAttribute("id");
attribute.value = "heading";
honetag.setAttributeNode(attribute);
honetag.innerHTML = "Welcome";
document.body.appendChild(honetag)

// 