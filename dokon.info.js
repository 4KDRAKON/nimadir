var elList = document.querySelector(`.dokon`)


function random (_brend) {
  for (var i = 0; i <dok.length; i++){


  

   
    var newli = document.createElement(`li`);
    var newimg = document.createElement(`img`);
    

    console.log(dok);



    
   
    newli.setAttribute(`class`, `dokon__item`)
    newimg.setAttribute(`class`, `nima`,)
    newimg.setAttribute(`width` , 90)
    newimg.setAttribute(`height` , 90)
    newimg.setAttribute(`alt`,dok[i].rasm)
   
    

    

    
    newimg.src = dok[i].rasm
 

    
    newli.appendChild(newimg)
   

    

  

    

    elList.appendChild(newli)


  
  
  }

  
}


random(dok)