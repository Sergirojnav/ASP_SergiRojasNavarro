const contenedor = document.querySelector('#container');
const zodd = document.querySelector('#person1');
const griffith = document.querySelector('#person2');
const apostol = document.querySelector('#person3');
var dragableID;

const contenedor2 = document.querySelector('#container2');
const dragonslayer = document.querySelector('#arma1');
const ballesta = document.querySelector('#arma2');
const lanzacohetes = document.querySelector('#arma3');
var dragableID2;




//Acción para cuando se comieza a mover el elemento
zodd.addEventListener('dragstart', function(event){
  dragableID = event.target;
});
griffith.addEventListener('dragstart', function(event){
  dragableID = event.target;
});
apostol.addEventListener('dragstart', function(event){
  dragableID = event.target;
});

dragonslayer.addEventListener('dragstart', function(event){
  dragableID2 = event.target;
});
ballesta.addEventListener('dragstart', function(event){
  dragableID2 = event.target;
});
lanzacohetes.addEventListener('dragstart', function(event){
  dragableID2 = event.target;
});






contenedor.addEventListener('dragenter', function(){
});

contenedor2.addEventListener('dragenter', function(){
});




//Acción para cuando se sale de un elemento, con otro elemento, con el mouse
contenedor.addEventListener('dragleave', function(){
});

contenedor2.addEventListener('dragleave', function(){
});



//Acción para cuando se está un elemento, con otro elemento, con el mouse
contenedor.addEventListener('dragover', function(event){
  event.preventDefault();
});
contenedor2.addEventListener('dragover', function(event){
  event.preventDefault();
});





//Acción para cuando se ha soltado un elemento
contenedor.addEventListener('drop', function(event){
  event.target.appendChild(dragableID);
});

contenedor2.addEventListener('drop', function(event){
  event.target.appendChild(dragableID2);
});





//FUNCIONES



function adventure(){
  
  if(dragableID.id == "person1" && dragableID2.id == "arma1"){
    location.href = "zodd&dragonslayer.html";
  }
  if(dragableID.id == "person1" && dragableID2.id == "arma2"){
    location.href = "zodd&ballesta.html";
  }
  if(dragableID.id == "person1" && dragableID2.id == "arma3"){
    location.href = "zodd&lanzacohetes.html";
  }
  if(dragableID.id == "person2" && dragableID2.id == "arma1"){
    location.href = "zodd&dragonslayer.html";
  }
  if(dragableID.id == "person2" && dragableID2.id == "arma2"){
    location.href = "zodd&ballesta.html";
  }
  if(dragableID.id == "person2" && dragableID2.id == "arma3"){
    location.href = "zodd&lanzacohetes.html";
  }
}




function clean(){
  try{
    location.reload();
  }catch{
    
  }
}

function disableContenedor(){
  try{
    if(draggableID != null){
      zodd.setAttribute("draggable", false);
      griffith.setAttribute("draggable", false);
      apostol.setAttribute("draggable", false);
    }
  } catch(err){
    console.log(err)
  }
}
