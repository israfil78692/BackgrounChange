const contain=document.querySelectorAll(".action")
const body=document.querySelector(".main")





contain.forEach(function(action){
    console.log(action);
    action.addEventListener('click',function(e){
        console.log(e);
        
          console.log(e.target);
          if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
          }
          if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id
          }
          if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
          }
          if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id
          }
          if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id
          }
    })
          
})

