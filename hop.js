var elbtn = document.querySelector(".kirish")
let elListmodal2 = document.querySelector(".mooodal__k")
var elKim = document.querySelector(".hul")
var elNima = document.querySelector(".sss")

console.log(elbtn);


elbtn.addEventListener("click", function (evt){
    evt.preventDefault()
    // elListmodal2.classList.toggle("--block")
    elListmodal2.setAttribute("class", "kopppppp")

})
elKim.addEventListener("click", function(evt){
    evt.preventDefault()
    elListmodal2.setAttribute("class", "mooodal__k")
    elNima.setAttribute("class","kopppppp")
})