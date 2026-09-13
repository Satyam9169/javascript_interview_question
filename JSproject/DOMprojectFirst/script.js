/* Your task is that you have to write in same function */
let current = document.querySelector('h3');
let btn = document.querySelector('.btn');
let add = document.querySelector('.add');

let flag = 0;
add.addEventListener('click', function () {
    if (flag === 0) {
        current.innerHTML = 'Stangers';
        current.style.color = 'green';
        btn.innerHTML = 'Remove';
        console.log('remove', current.innerHTML);
        flag = 1;
    } else {
        current.innerHTML = 'Friends';
        current.style.color = 'Blue';
        btn.innerHTML = 'Add Friend';
        console.log('Add Friends', current.innerHTML);
        flag = 0;
    }
})


/* This is we created with seprate function */

// let current = document.querySelector('h3');
// let remove = document.querySelector('.remove');
// let add = document.querySelector('.add');

// add.addEventListener('click', function(){
//     current.innerHTML = 'Friends';
//     current.style.color = 'green';
//     console.log('click', current.innerHTML);
// })

// remove.addEventListener('click', function() {
//     current.innerHTML = 'Stranger';
//     current.style.color = 'blue';
//     console.log('click', current.innerHTML);
// })