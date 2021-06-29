"use strict";
let canvas = document.querySelector("#meu-canvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#boneco");

 let posx = 0;
 let posy = 0;
 let blockX= canvas.width / 2 - 25;
 let blockY = canvas.height / 2 - 25;
 const altura = 60;
 const largura = 20;
 const qtd_mov = 6;

 //FUNÇÃO QUE EXIBE O BONECO
 function desenhaCarinha(){
   ctx.drawImage(img, posx, posy, largura, altura);
}
//FUNÇÃO QUE EXIBE A CAIXA
function desenhaBloco(){
   ctx.fillRect(blockX, blockY, 300, 300);
 }
//CHAMANDO AS FUNÇÕES
desenhaCarinha();
desenhaBloco();

//FUNÇÃO QUE LIMPA O CANVAS (PRA QUANDO MOVER O BONECO NÃO FICAR TIPO UMA SOMBRA)
 function limparCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 }

 //"ENTRADA" DA TECLA QUE O USUARIO PRESSIONA

 document.onkeydown =  function(event) {
    switch (event.key) {
        case "ArrowUp":
            if (posy>0)
            posy -= qtd_mov;
            //SE MOVER P CIMA A CAIXA FICA DE TAL COR
            ctx.fillStyle = "#00f";
            break;
         case "ArrowDown":
             if (posy  + img.height < canvas.height)
            posy += qtd_mov
             //SE MOVER P BAIXO A CAIXA FICA DE TAL COR
            ctx.fillStyle = "#f00";
             break;
             case "ArrowLeft":
                 if (posx > 0)
                posx -= qtd_mov
             //SE MOVER P ESQUERDA A CAIXA FICA DE TAL COR
                ctx.fillStyle = "#0f0";
                break;
         case "ArrowRight":
            if (posx  + img.width < canvas.width)
            posx += qtd_mov
            //SE MOVER P DIREITA A CAIXA FICA DE TAL COR
            ctx.fillStyle = "#000";
              break;
        default:
            break;
    }
    limparCanvas();
    desenhaCarinha();
    desenhaBloco();
}
 //OBJETIVO DO JOGO
 //ENCONTRAR A TECLA QUE MUDA A CAIXA P COR AZUL
 document.onkeyup = function(evento){
   switch (evento.key) {
      case "ArrowUp":
         alert("Você achou!")
         limparCanvas();
         desenhaCarinha();
         desenhaBloco();
         break;
         case "ArrowDown":
         break;
      case "ArrowRight":
         break;
      case "ArrowLeft":

         break;
      default:
         break;
      }   
 }
