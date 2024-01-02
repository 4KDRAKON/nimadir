var elList = document.querySelector(`.omma__list`)


function random (_films) {
  for (var i = 0; i < 10; i++){


  

   
    var newli = document.createElement(`li`);
    var newimg = document.createElement(`img`);
    var newtitle = document.createElement(`h2`);
    var newtext = document.createElement(`p`);
    var newbtn = document.createElement("button")
    var hr = document.createElement("h4")
    var hop = document.createElement("p")
    var newbtn2 = document.createElement("button")
    var newrasm = document.createElement("img")

    



    
    newtitle.setAttribute(`class`, `pul`)
    newli.setAttribute(`class`, `kop__item`)
    newimg.setAttribute(`class`, `img`,)
    newimg.setAttribute(`width` , 157)
    newimg.setAttribute(`height` , 157)
    newimg.setAttribute(`alt`,films[i].type)
    newtext.setAttribute("class","p__text")
    hr.setAttribute("class", "sot")
    hop.setAttribute("class","sot")
    newbtn.setAttribute("class","ol")
    newbtn2.setAttribute("class","korzinka")
    newrasm.setAttribute("class","nimadir")
    

    

    
    newimg.src = films[i].poster
    newrasm.src =films[i].kol
    newtitle.textContent = films[i].title
    newtext.textContent = films[i].genres
    hop.textContent = films[i].id
    newbtn.textContent = "Sotib olish"

    newbtn2.appendChild(newrasm)
    newli.appendChild(newimg)
    newli.appendChild(hr)
    newli.appendChild(newtitle)
    newli.appendChild(newtext)
    newli.append(hop)
    newli.append(newbtn)
    newli.append(newbtn2)

    

  console.log(newbtn)

    

    elList.appendChild(newli)


  
  
  }

  
}


random(films)
