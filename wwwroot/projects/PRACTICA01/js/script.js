function comparartextos() {

    let lname = document.getElementById("lname").value;
    let fname = document.getElementById("fname").value;
    let igual = document.getElementById("igual");
    if (lname != fname) {
        document.getElementById("igual").innerHTML = "!=";
    } else {
        document.getElementById("igual").innerHTML = "==";
    }
}

function contarCaracteres(){

    var strLength = document.getElementById("texto").value.length;

    if(strLength < 30){

        document.getElementById("numeroChar").innerHTML = strLength+ " letras";

    }else{

        document.getElementById("numeroChar").innerHTML = "Error 404, quita letras!";

    }

}

function raizCuadrada(){

    let pedirnum = document.getElementById("pedirnum").value;

    let resultado = Math.sqrt(pedirnum);

    document.getElementById("result").value=resultado;

}

function concatenarTexto(){
    let concatenar = document.getElementById("textB").value + document.getElementById("textC").value;
    document.getElementById("resultado").value=concatenar;
}

function cambioColor(){
    let verde = document.getElementById("verde").checked;
    let azul = document.getElementById("azul").checked;
    let rojo = document.getElementById("rojo").checked;

    if (verde == true) {
        document.getElementById("cambioColor").style.color = "green";
    }
    else if (azul == true) {
        document.getElementById("cambioColor").style.color = "blue";
    }
   else if (rojo == true) {
        document.getElementById("cambioColor").style.color = "red";
    }
}

function cambioTamaño(){
    let altura = document.getElementById("alto").value;
    let anchura = document.getElementById("anchura").value;
    let imagen = document.getElementById("imagen");

    imagen.style.width = anchura + "px";
    imagen.style.height = altura + "px";


}
