const contenedor3 = document.querySelector('#container3');
const montar = document.querySelector('#action1');
const luchar = document.querySelector('#action2');
var dragableID3;



montar.addEventListener('dragstart', function(event){
  dragableID3 = event.target;
});
luchar.addEventListener('dragstart', function(event){
  dragableID3 = event.target;
});

contenedor3.addEventListener('dragenter', function(){
});

contenedor3.addEventListener('dragleave', function(){
});


contenedor3.addEventListener('dragover', function(event){
  event.preventDefault();
});

contenedor3.addEventListener('drop', function(event){
  event.target.appendChild(dragableID3);
});


function adventureZodd(){
  
    if(dragableID3.id == "action1"){
      location.href = "finalzodd.html";
    }
    if(dragableID3.id == "action2"){
        location.href = "finalzodd2.html";
      }

  }

function clean(){
    try{
      location.reload();
    }catch{
      
    }
  }