"use strict";

let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let imagem = document.querySelector("#heroi");
let cogumelo = document.querySelector("#cogumelo");

let posicao_x = 0;
let posicao_y = 0;
let cogumelo_x = 480;
let cogumelo_y = 200;

const QDE_MOVIMENTO = 10;

function limpaCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhoHero() {
    ctx.drawImage(imagem, posicao_x, posicao_y);
}

function desenhocogumelo() {
    ctx.drawImage(cogumelo, cogumelo_x, cogumelo_y);
}

desenhoHero();
desenhocogumelo();

document.onkeydown = function (evento) {
    switch (evento.key) {
        case "ArrowUp":
            if (posicao_y > 0)
                posicao_y -= QDE_MOVIMENTO;
            break;
        case "ArrowDown":
            if (posicao_y + imagem.height < canvas.height)
                posicao_y += QDE_MOVIMENTO;
            break;
        case "ArrowLeft":
            if (posicao_x > 0)
                posicao_x -= QDE_MOVIMENTO;
            break;
        case "ArrowRight":
            if (posicao_x + imagem.height < canvas.width)
                posicao_x += QDE_MOVIMENTO;
            break;

        default:
            break;
    }

    limpaCanvas();
    desenhoHero();
    desenhocogumelo();
    finish();
}

function finish() {
    if (posicao_y == cogumelo_y - 10 && posicao_x == cogumelo_x - 10){
        alert("Mario encontrou o cogumelo!");
    }
}