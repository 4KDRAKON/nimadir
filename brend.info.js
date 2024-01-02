var elList = document.querySelector(`.brend`)


function random (_brend) {
  for (var i = 0; i <brend.length; i++){


  

   
    var newli = document.createElement(`li`);
    var newimg = document.createElement(`img`);
    

    console.log(brend);



    
   
    newli.setAttribute(`class`, `brend__li`)
    newimg.setAttribute(`class`, `nima`,)
    newimg.setAttribute(`width` , 90)
    newimg.setAttribute(`height` , 90)
    newimg.setAttribute(`alt`,brend[i].lol)
   
    

    

    
    newimg.src = brend[i].lol
 

    
    newli.appendChild(newimg)
   

    

  

    

    elList.appendChild(newli)


  
  
  }

  
}


random(brend)