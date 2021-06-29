"use strict";
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let heroi = document.querySelector("#heroi");
let objetivo = document.querySelector('#objetivo');
let posx = 0;
let posy = 0;
let objx = 650;
let objy = 250;
const QDE_MOVIMENTO = 10;

function limpaCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenhaObjetivo();
}

function desenhaHeroi() {
    ctx.drawImage(heroi, posx, posy);
}

function desenhaObjetivo() {
    ctx.drawImage(objetivo, objx, objy);
}

desenhaHeroi();
desenhaObjetivo();


function chegouObjetivo() {
    if(posx == objx && posy == objy) {
        alert("Seu herói alcançou o objetivo!");
    }
}

document.onkeydown = function(evento) {
    switch (evento.key) {
        case "ArrowUp":
            if (posy > 0)
                posy -= QDE_MOVIMENTO;
            break;
        case "ArrowDown":
            if (posy + heroi.height < canvas.height)
                posy += QDE_MOVIMENTO;
            break;
        case "ArrowLeft":
            if (posx > 0)
                posx -= QDE_MOVIMENTO;
            break;
        case "ArrowRight":
            if (posx + heroi.width < canvas.width)
                posx += QDE_MOVIMENTO;
            break;

        default:
            break;
    }
    console.log(posx);
    console.log(posy);


    limpaCanvas();
    desenhaHeroi();
    chegouObjetivo();
}