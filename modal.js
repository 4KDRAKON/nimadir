let elMoadal1 = document.querySelector(".btn__kirish")
let elListmodal = document.querySelector(".modal")



elMoadal1.addEventListener("click", function(evt){
    evt.preventDefault()

    elListmodal.classList.toggle("--block")
});

