const contenedor4 = document.querySelector('#container4');
const disparar = document.querySelector('#action3');
const sorpresa = document.querySelector('#action4');
var dragableID4;



disparar.addEventListener('dragstart', function(event1){
  dragableID4 = event1.target;
});
sorpresa.addEventListener('dragstart', function(event1){
  dragableID4 = event1.target;
});

contenedor4.addEventListener('dragenter', function(){
});

contenedor4.addEventListener('dragleave', function(){
});


contenedor4.addEventListener('dragover', function(event1){
  event1.preventDefault();
});

contenedor4.addEventListener('drop', function(event1){
  event1.target.appendChild(dragableID4);
});


function adventureZodd(){
if(dragableID4.id == "action3"){
    location.href = "finalzoddballesta.html";
  }
  if(dragableID4.id == "action4"){
      location.href = "finalzoddballesta2.html";
    }
}

function clean(){
    try{
      location.reload();
    }catch{
      
    }
  }