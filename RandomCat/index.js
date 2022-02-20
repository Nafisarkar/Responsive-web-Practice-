const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");
const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");

cat_btn.addEventListener("click", get_rendomcat)
dog_btn.addEventListener("click", get_rendomdog)

var count = 0;

function get_rendomcat(){
    count++;
    fetch('http://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => {
        cat_result.innerHTML = `<img src="${data.file}"/>`
    })
    visited.innerHTML = `<h>${count}</h>`
}
function get_rendomdog(){
    count++;
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        dog_result.innerHTML = `<img src="${data.message}"/>`
    })
    visited.innerHTML = `<h>${count}</h>`
}