/**
 * Created by Kar on 11/11/16.
 */
function Cercle(id) {

    this.id = id;
    this.x = posHoritzontal();
    this.y = posVertical();
    this.color = createRgba();//getRandomColor(); 
    this.radi = document.getElementById('radio').value;//Math.floor((Math.random() * 30) + 1);

    this.posHoritzontal = posHoritzontal;
    this.posVertical = posVertical;

    this.pintaPelota = pintaPelota;
    this.getRandomColor = getRandomColor;
    this.createRgba = createRgba;
    

    function createRgba () {
        var r,g,b,a;
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        a = Math.random();

        rgba = "rgba("+r + "," + g + "," + b + "," + a +")";
        return rgba;


    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var coloreando = '#';
        for (var i = 0; i < 6; i++) {
            coloreando += letters[Math.floor(Math.random() * 16)];
        }

        return coloreando;
    }


    function posHoritzontal() {

            horizontal = Math.floor((Math.random() * 900) + 1);
        return horizontal;

    }

    function posVertical() {
            vertical = Math.floor((Math.random() * 720) + 1);
        return vertical;
    }


    function pintaPelota() {
            //console.log("entra a pntar pelota");


            var pelotaDiv = document.createElement("div");
            pelotaDiv.innerHTML = "<div class='animated bounceIn' id='cercle" + this.id + "' style='position:absolute;z-index:" + this.id + ";top:" + this.y + "px;left:" + this.x + "px;width: " + this.radi + "px;height:" + this.radi + "px;background-color: " + this.color + ";border-radius: 50%'></div>";

        var pizarra = document.getElementById("pizarra");

        pizarra.appendChild(pelotaDiv)};






}






