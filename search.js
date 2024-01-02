var elInput = document.querySelector(".input")
var elList1 = document.querySelector(".kop__list")




function SearchInput() {
    
    elList1.innerHTML = null
    const inputValue = elInput.value.trim()
    
    const search = new RegExp(inputValue, 'gi');
   
    const input = films.filter((film) => film.title.match(search))
    
    NextStorys(input, elList)
   
    }
   
    elInput.addEventListener("input", SearchInput)