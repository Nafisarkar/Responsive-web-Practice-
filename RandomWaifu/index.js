const waifu_res = document.getElementById("waifu_res");

waifu_call.addEventListener("click", get_waifu);

function get_waifu(){
    fetch('https://api.waifu.pics/sfw/waifu')
    .then(response => response.json())
    .then(data => {
        waifu_res.innerHTML = `<img src="${data.url}"/>`
    })
}