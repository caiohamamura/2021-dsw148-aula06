"use strict"
let canvas = document.querySelector("#meuCanvas");
let ctx = canvas.getContext("2d");
let imgB = document.querySelector("#heroi");
let imgC = document.querySelector("#Coin");
let imgP = document.querySelector("#Portal");
let posx = 0;
let posy = 290;
let posyC = 320;
let contagem = 0;
const QDE_MOVIMENTO = 5;

function limpaCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi() {
  if(posx <= canvas.width + imgB.width)
  {
    ctx.drawImage(imgB, posx, posy);

    if(posx < - imgB.width)
        {
            alert("Lado errado!")
        }
    if(posy <= 0 - imgB.width)
        {
            alert("Você alcançou o céu!")
        }
  }
  else
  {
    alert("Você foi embora");
  }
}

desenhaHeroi();

function desenhaMoedas(){
    if(posx <= canvas.width + imgC.width)
{
    if(posx < 200)
    {
        ctx.drawImage(imgC, 200, posyC)
        ctx.drawImage(imgC, 310, posyC)
        ctx.drawImage(imgC, 420, posyC)
        ctx.drawImage(imgC, 530, posyC)
    }
    else
    if(posx < 310 && posy == 290)
    {
    ctx.drawImage(imgC, 310, posyC)
    ctx.drawImage(imgC, 420, posyC)
    ctx.drawImage(imgC, 530, posyC)
    if(contagem == 0)
    {
        contagem = 1;
    }
    }
    else
    if(posx < 420 && posy == 290)
    {
    ctx.drawImage(imgC, 420, posyC)
    ctx.drawImage(imgC, 530, posyC)
    if(contagem == 1)
    {
        contagem = 2;
    }
    }
    else
    if(posx < 530 && posy == 290)
    {
    ctx.drawImage(imgC, 530, posyC)
    if(contagem == 2)
    {
        contagem = 3;
    }
    }
    else
    if(posx >= 530 && posy == 290)
    {
        if(contagem == 3)
    {
        contagem = 4;
    }
    }
    else
    {
    alert("Você não é o superman!")
    window.location.reload();
    }
}
}

desenhaMoedas()

function desenhaPortal(){
    if(posx <= canvas.width + imgC.width)
{
    ctx.drawImage(imgP, 605, 170)
}
}

desenhaPortal()

document.onkeydown = function(evento) {
  switch (evento.key) {
      case "ArrowLeft":
          if (posx > 0)
              document.getElementById("heroi").src = "bonecoE.png";
              posx -= QDE_MOVIMENTO;
              
          if(posx == 610 && contagem == 4)
          {
             alert("Parabens, você chegou ao final da fase!");
             window.location.reload();
          }
          break;
      case "a":
          if (posx > 0)
              document.getElementById("heroi").src = "bonecoE.png";
              posx -= QDE_MOVIMENTO;
              
              if(posx == 610 && contagem == 4)
          {
             alert("Parabens, você chegou ao final da fase!"); 
             window.location.reload(); 
          }
          break;
      case "ArrowRight":
          if (posx + imgB.width < canvas.width)
              document.getElementById("heroi").src = "bonecoD.png";
              posx += QDE_MOVIMENTO;
              
              if(posx == 610 && contagem == 4)
          {
             alert("Parabens, você chegou ao final da fase!"); 
             window.location.reload(); 
          }
          break;
      case "d":
          if (posx < canvas.width)
              document.getElementById("heroi").src = "bonecoD.png";
              posx += QDE_MOVIMENTO;
              
              if(posx == 610 && contagem == 4)
          {
             alert("Parabens, você chegou ao final da fase!"); 
             window.location.reload(); 
          }
          break;
        case "ArrowUp":
            if (posy + imgB.width > 0)
                posy -= QDE_MOVIMENTO;
                
                if(posx == 610 && contagem == 4)
          {
             alert("Parabens, você chegou ao final da fase!"); 
             window.location.reload();
          }
            break;
        case "w":
            if (posy + imgB.width > 0)
               posy -= QDE_MOVIMENTO;
               
               if(posx == 610 && contagem == 4)
          {
             alert("Parabens, você chegou ao final da fase!"); 
             window.location.reload(); 
          }
            break;
        case "ArrowDown":
            if (posy + imgB.height < canvas.height - 100)
                posy += QDE_MOVIMENTO;
                
                if(posx == 610 && contagem == 4)
          {
             alert("Parabens, você chegou ao final da fase!"); 
             window.location.reload(); 
          }
            break;
        case "s":
            if (posy + imgB.height < canvas.height - 100)
                posy += QDE_MOVIMENTO;
                
                if(posx == 610 && contagem == 4)
          {
             alert("Parabens, você chegou ao final da fase!");
             window.location.reload(); 
          }
            break;
      default:
          break;

  }

  limpaCanvas();
  desenhaHeroi();
  desenhaMoedas();
  desenhaPortal();
}