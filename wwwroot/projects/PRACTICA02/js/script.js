function primeraRonda(){
    let nilo = document.getElementById("nilo").checked;
    let amazonas = document.getElementById("amazonas").checked;
    let danubio = document.getElementById("danubio").checked;
    let besos = document.getElementById("besos").checked;

    let pacifico = document.getElementById("pacifico").checked;
    let atlantico = document.getElementById("atlantico").checked;
    let indico = document.getElementById("indico").checked;
    let artico = document.getElementById("artico").checked;

    if (pacifico == true && amazonas == true) {
        window.alert("Su respuesta es correcta");
        document.getElementById("tercera").style.display = "block";
        document.getElementById("cuarta").style.display = "block";
        document.getElementById("comprobar2").style.display = "block";
        document.getElementById("comprobar").style.display = "none";
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("error").style.display = "none";
        bloquearPrimeraPregunta()
        bloquearSegundaPregunta()
    }
    else{
        window.alert("Su respuesta es incorrecta");
        document.getElementById("error").style.display = "block";
        bloquearPrimeraPregunta()
        bloquearSegundaPregunta()
    }
    
}

function segundaRonda(){
    let venus = document.getElementById("venus").checked;
    let neptuno = document.getElementById("neptuno").checked;
    let mercurio = document.getElementById("mercurio").checked;
    let tierra = document.getElementById("tierra").checked;

    let otro = document.getElementById("otro").checked;
    let italia = document.getElementById("italia").checked;
    let suecia = document.getElementById("suecia").checked;
    let noruega = document.getElementById("noruega").checked;

    if (tierra == true && suecia == true) {
        window.alert("Su respuesta es correcta");
        document.getElementById("mensaje2").style.display = "block";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error").style.display = "none";
        document.getElementById("mensaje").style.display = "none";
        bloquearTerceraPregunta()   
        bloquearCuartaPregunta()
    }

    else {
        window.alert("Su respuesta es incorrecta");
        document.getElementById("error2").style.display = "block";
        document.getElementById("error").style.display = "none";
        document.getElementById("mensaje2").style.display = "none";
        document.getElementById("mensaje").style.display = "none";
        bloquearTerceraPregunta()   
        bloquearCuartaPregunta()
    }
}

function bloquearPrimeraPregunta(){
    let primerRespuesta1 = document.getElementById("nilo")
    let primerRespuesta2= document.getElementById("amazonas")
    let primerRespuesta3 = document.getElementById("danubio")
    let primerRespuesta4 = document.getElementById("besos")

    primerRespuesta1.disabled = true;
    primerRespuesta2.disabled = true;
    primerRespuesta3.disabled = true;
    primerRespuesta4.disabled = true;
}
function bloquearSegundaPregunta(){
    let primerRespuesta1 = document.getElementById("pacifico")
    let primerRespuesta2 = document.getElementById("atlantico")
    let primerRespuesta3 = document.getElementById("indico")
    let primerRespuesta4 = document.getElementById("artico")

    primerRespuesta1.disabled = true;
    primerRespuesta2.disabled = true;
    primerRespuesta3.disabled = true;
    primerRespuesta4.disabled = true;
}
function bloquearTerceraPregunta(){
    let primerRespuesta1 = document.getElementById("venus")
    let primerRespuesta2= document.getElementById("neptuno")
    let primerRespuesta3 = document.getElementById("mercurio")
    let primerRespuesta4 = document.getElementById("tierra")

    primerRespuesta1.disabled = true;
    primerRespuesta2.disabled = true;
    primerRespuesta3.disabled = true;
    primerRespuesta4.disabled = true;
}
function bloquearCuartaPregunta(){
    let primerRespuesta1 = document.getElementById("otro")
    let primerRespuesta2= document.getElementById("italia")
    let primerRespuesta3 = document.getElementById("suecia")
    let primerRespuesta4 = document.getElementById("noruega")

    primerRespuesta1.disabled = true;
    primerRespuesta2.disabled = true;
    primerRespuesta3.disabled = true;
    primerRespuesta4.disabled = true;
}