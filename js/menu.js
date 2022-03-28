const icon = document.querySelector("#icon-menu");
const menu = document.querySelector("#header")
var deploy = false

icon.addEventListener("click", () =>{
    deploy ? deploy = false:deploy = true;
    deployHeader(deploy);
})

function deployHeader(deploy){
    deploy?menu.classList.add("header-responsive"):menu.classList.remove("header-responsive")
}