let arr = ["mango", "orange", "apple", "orange", "mango", "apple"];


function RemoveDublicate(arr) {
    return arr.filter((curr, index) => arr.indexOf(curr) === index)
}

console.log(RemoveDublicate(arr));
