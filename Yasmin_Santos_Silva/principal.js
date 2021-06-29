"use strict";
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#urso");

let arvore = document.querySelector("#arvore");
let Ax = 500;
let Ay = 250;

const altura = 60;
const largura = 20;
const QDE_MOVIMENTO = 10;
const VEL_ATUALIZA = 8;

let posx = 0;
let posy = 0;
let direcao = "l";


function limpaCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        desenhArvore();
}


function desenhurso() {
  ctx.drawImage(img, posx, posy);
}


function desenhArvore() {
ctx.drawImage(arvore, Ax, Ay);
}
desenhurso();
desenhArvore();

function terminarJogo() {
    if (posx == Ax && posy==Ay){
       alert("Você ganhou! O urso chegou na árvore"); 
    }
    
}

document.onkeydown = function(evento) {
    switch (evento.key) {
        case "ArrowUp":
            if (posy > 0)
                posy -= QDE_MOVIMENTO;
            break;
        case "ArrowDown":
            if (posy + img.height < canvas.height)
            posy += QDE_MOVIMENTO;
            break;
        case "ArrowLeft":
            if (posx > 0)
            posx -= QDE_MOVIMENTO;
            break;
        case "ArrowRight":
            if (posx + img.width < canvas.width)
            posx += QDE_MOVIMENTO;
            break;

        default:
            break;
    }
    limpaCanvas();
    desenhurso();
    terminarJogo();
}

