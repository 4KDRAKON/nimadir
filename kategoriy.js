var elList = document.querySelector(`.list`)

console.log(elList);
function random (pics) {
    for (var i = 0; i < pics.length; i++){
  
  
    
  
     
      var newli = document.createElement(`li`);
      var newimg = document.createElement(`img`);
      var newtitle = document.createElement(`h3`);
      
  
  
  
      
      newtitle.setAttribute(`class`, `film__title`)
      
      newli.setAttribute(`class`, `list__item`)
      newimg.setAttribute(`class`, `img`,)
      newimg.setAttribute(`width` , 157)
      newimg.setAttribute(`height` , 157)
      newimg.setAttribute(`alt`,pics[i].title)
    
      
  
      
      newimg.src = pics[i].rasm
      newtitle.textContent = pics[i].title
      
  
      
      newli.appendChild(newimg)
    
      newli.appendChild(newtitle)
      
  
   
  
      
  
      elList.appendChild(newli)
  
  
    
    
    }
  
    
  }
  
  
  random(pics)
  