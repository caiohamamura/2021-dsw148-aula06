"use strict";
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#chapeu");
let imgSeta = document.querySelector("#seta");
let posx = 0;
let posy = 0;
let posxSeta= 350;
let posySeta=0;
const QDE_MOVIMENTO = 10;

function limpaCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function heroi() {
    ctx.drawImage(img, posx, posy);
}

function seta() {
    ctx.drawImage(imgSeta, posxSeta, posySeta);
}

heroi();
seta();

document.onkeydown = function(evento) {
    switch (evento.key) {
        case "ArrowUp":
            if (posy > 0)
                posy -= QDE_MOVIMENTO;
            break;
        case "ArrowDown":
            if (posy + img.height  < canvas.height)
                posy += QDE_MOVIMENTO;
            break;
        case "ArrowLeft":
            if (posx > 0)
                posx -= QDE_MOVIMENTO;
            break;
        case "ArrowRight":
            if (posx + img.height   < canvas.width)
                posx += QDE_MOVIMENTO;
            break;

        default:
            break;
    }

    limpaCanvas();
    heroi();
    seta();
    terminarJogo();
}

function terminarJogo() {
   if(posy==posySeta-0 && posx==posxSeta+100)
    alert("Se acabó Anakin, tengo el terreno alto");
}