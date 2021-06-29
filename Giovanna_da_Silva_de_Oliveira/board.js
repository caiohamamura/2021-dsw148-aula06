"use strict";
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#scooby");
let imgSnack = document.querySelector("#snack");
let posx = 0;
let posy = 0;
let posxSnack=320;
let posySnack=160;
const QDE_MOVIMENTO = 10;

function limpaCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHero() {
    ctx.drawImage(img, posx, posy);
}

function desenhasnack() {
    ctx.drawImage(imgSnack, posxSnack, posySnack);
}

desenhaHero();
desenhasnack();

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
    desenhasnack();
    terminarJogo();
}

function terminarJogo() {
   if(posy==posySnack-10 && posx==posxSnack-10)
    alert("Parabéns, você encontrou a deliciosa caixa de 'biscoitos Scooby'!");
}