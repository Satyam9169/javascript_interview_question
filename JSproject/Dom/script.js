let first = document.querySelector('.first');
let btn = document.querySelector('.btn')

let flag = 0;



btn.addEventListener("click", function(){
    if(flag == 0){
        first.style.backgroundColor = "yellow"
        flag = 1;
        console.log('Hi i am clicked !!!');
    }else{
        first.style.backgroundColor = "transparent"
        flag = 0;
        console.log('transparent vala clicked !!!');
    }
})