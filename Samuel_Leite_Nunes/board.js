"use strict";
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#magali");
let imgMelancia = document.querySelector("#melancia");
let posx = 0;
let posy = 0;
let posxMelancia=420;
let posyMelancia=200;
const QDE_MOVIMENTO = 10;

function limpaCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHero() {
    ctx.drawImage(img, posx, posy);
}

function desenhamelancia() {
    ctx.drawImage(imgMelancia, posxMelancia, posyMelancia);
}

desenhaHero();
desenhamelancia();

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
    desenhaHero();
    desenhamelancia();
    terminarJogo();
}

function terminarJogo() {
   if(posy==posyMelancia-10 && posx==posxMelancia-10)
    alert("Parabéns, você encontrou a saborosa melancia!");
}