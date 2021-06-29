"use strict";
let canvas = document.querySelector("#meu-canvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#kawaii");

const altura = 100;
const largura = 150;
const QDE_MOVIMENTO = 25;
const VEL_ATUALIZA = 50;

let posx = 800;
let posy = 50;
let direcao = "l";


function limpaCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaKawaii() {
    ctx.drawImage(img, posx, posy, largura, altura);
}

desenhaKawaii();

function repeticaoPrincipal() {
    switch (direcao) {
        case "n":
            if (posy > 0)
                posy += QDE_MOVIMENTO;
            break;
        case "s":
            if (posy + altura > canvas.width)
                posy -= QDE_MOVIMENTO;
            break;
        case "l":
            if (posx + 200 > canvas.height)
                posx -= QDE_MOVIMENTO;
            break;
        case "o":
            if (posx > 950)
                posx += QDE_MOVIMENTO;
            break;

        default:
            break;
    }

    limpaCanvas();
    desenhaKawaii();
}

let repeticao = setInterval(repeticaoPrincipal, VEL_ATUALIZA);

document.onkeydown = function(evento) {
    switch (evento.key) {
        case "ArrowUp":
            if (direcao != "s")
                direcao = "n";
            break;
        case "ArrowDown":
            if (direcao != "n")
                direcao = "s";
            break;
        case "ArrowLeft":
            if (direcao != "l")
                direcao = "o";
            break;
        case "ArrowRight":
            if (direcao != "o")
                direcao = "l";
            break;

        default:
            break;
    }
    terminarJogo() 
}

function terminarJogo() 
{
    clearTimeout(repeticao);
    alert("Cai fora, apenas batata frita!");
}