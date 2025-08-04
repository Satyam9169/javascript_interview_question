var main = document.querySelector('.main')
var cursor = document.querySelector('.cursor')


main.addEventListener('mousemove', function(item){
    cursor.style.left = item.x + "px"
    cursor.style.top = item.y + "px"
    console.log(cursor.style.left + cursor.style.top);
})