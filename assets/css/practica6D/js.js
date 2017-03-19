var circulosArray = [];



function muestra(elemento) {

    estado = document.getElementById(elemento).style.display;
    if (estado == "none") {
        estado =     "inline";

    } else {
        estado = "none";
    }

    document.getElementById(elemento).style.display = estado;
}

function randomCirculos() {

    cantidadCirculos = document.getElementById('cantidad').value;


    for (i = 0; i < cantidadCirculos; i++) {
        circulosArray.push(new Cercle(i));
        circulosArray[i].pintaPelota();

    }


    circulosArray = [];


}
