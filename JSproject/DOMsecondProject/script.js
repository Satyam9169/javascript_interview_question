let change = document.querySelector('#container')

let love = document.querySelector("i");

change.addEventListener('dblclick', function () {
    love.style.transform = 'translate(-50%, -50%) scale(1)'
    love.style.opacity = 0.8;

    setTimeout(() => {
        love.style.opacity = 0;
    }, 1000)

    setTimeout(() => {
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1000)

})