// const div = document.querySelector('#div');
// const form = document.querySelector('#form');
// const btn = document.querySelector('#btn')

// this example for event bubbling
// div.addEventListener('click', ()=>{
//     alert('div')
// })

// form.addEventListener('click', ()=>{
//     alert('this is form')
// })

// btn.addEventListener('click', ()=>{
//     alert('this is btn')
// })


// diff bet event.target vs this.target vs event.currentTarget
// div.addEventListener('click', fun)
// form.addEventListener('click', fun)
// btn.addEventListener('click', fun)

// function fun(event){
//     alert(
//         'event target = ' + event.target.tagName
//         + ', this = ' + this.tagName + 
//         ', currentTarget ' + event.currentTarget.tagName
//     )
// }

// const div = document.querySelector('#div');
// const form = document.querySelector('#form');
// const btn = document.querySelector('#btn')

// this example for capturing/trickling
// when we clicking it comming from div=>form=>btn
// we add capture as a second object
// div.addEventListener('click', ()=>{
//     alert('this is div')
// },{
//     capture: true
// }
// )

// form.addEventListener('click', ()=>{
//     alert('this is form')
// }
// ,{
//     capture: true
// }
// )

// btn.addEventListener('click', ()=>{
//     alert('this is btn')
// }
// ,{
//     capture: true
// }
// )

// How do you stop bubbling and capturing
// using stopPropagation() we can stop
// jis function me hm stopPropagation()
// set kr denge to bubbling hona band ho jayega

// const div = document.querySelector('#div');
// const form = document.querySelector('#form');
// const btn = document.querySelector('#btn')

// div.addEventListener('click', (e)=>{
//     alert('this is div')
// })

// form.addEventListener('click', ()=>{
//     alert('this is form')
// })

// btn.addEventListener('click', (e)=>{
//     e.stopPropagation()
//     alert('this is btn')
// })

// What is event delagation ?



// output based question

const div = document.querySelector('#div');
const form = document.querySelector('#form');
const btn = document.querySelector('#btn')

div.addEventListener('click', (e)=>{
    alert('this is div')
})

form.addEventListener('click', ()=>{
    alert('this is form')
},{
    capture:true
})

btn.addEventListener('click', (e)=>{
    alert('this is btn')
})
