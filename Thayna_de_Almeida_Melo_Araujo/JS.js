"use strict";
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#personagem");
let imgPokebola = document.querySelector("#pokebola");
let posx = 0;
let posy = 0;
let posxPoke=320;
let posyPoke=160;
const QDE_MOVIMENTO = 10;

function limpaCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi() {
    ctx.drawImage(img, posx, posy);
}

function desenhapokebola() {
    ctx.drawImage(imgPokebola, posxPoke, posyPoke);
}

desenhaHeroi();
desenhapokebola();

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
    desenhaHeroi();
    desenhapokebola();
    terminarJogo();
}

function terminarJogo() {
   if(posy==posyPoke-10 && posx==posxPoke-10)
    alert("Seu Pokemon retornou à Pokebola!");
}