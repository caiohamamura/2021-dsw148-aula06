//Nathália Regina e Nicoly Lopes - CTII 418

"use strict";
let canvas = document.querySelector("#meuCanvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#aranha");

 let posx = canvas.width / 2 - 45;
 let posy = canvas.height / 2 - 55;
 const altura = 110;
 const largura = 90;
 const qtd_mov = 10;

 //FUNÇÃO QUE EXIBE O BONECO
 function desenhaAranha(){
   ctx.drawImage(img, posx, posy, largura, altura);
}

desenhaAranha();

//FUNÇÃO QUE LIMPA O CANVAS
 function limpaCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 }

 //FUNÇÃO QUE VERIFICA SE BATEU NA LATERAL
 function verificaBorda(){
    if (posx + img.width > canvas.width || posx - img.width <= 0){
     alert("Parabéns, você ganhou!!!");
    }
  }

 //"ENTRADA" DA TECLA QUE O USUARIO PRESSIONA
 document.onkeydown =  function(event) {
    switch (event.key) {
        case "ArrowUp":
            if (posy > 0)
               posy -= qtd_mov;
            break;
        case "ArrowDown":
            if (posy  + img.height < canvas.height)
                posy += qtd_mov
            break;
        case "ArrowLeft":
            if (posx > 0)
                posx -= qtd_mov
            break;
        case "ArrowRight":
            if (posx  + img.width < canvas.width)
                posx += qtd_mov
            break
        default:
            break;
    }
    limpaCanvas();
    desenhaAranha();
   verificaBorda();
}

