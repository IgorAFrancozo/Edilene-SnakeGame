let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let quadrado = 32;
let snake = [];
let vidasX;
let tela;
let quantidadeComida = 0;
let vidasQtd = 5;
let tempo = 160;
var mostra = document.querySelector(".timer");


// Array cobrinha
snake[0] = {
  x: 12 * quadrado,
  y: 12 * quadrado,
};

let direcao = "right";

let comida = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};
let obst = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};
let obst2 = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};
let obst3 = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};
let obst4 = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};
let obst5 = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};
let obst6 = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};
let obst7 = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};
let obst8 = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};
let obst9 = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};
let obst10 = {
  x: Math.floor(Math.random() * 15 + 1) * quadrado,
  y: Math.floor(Math.random() * 15 + 1) * quadrado,
};

//---------------------------------------- Funções ------------------------------------//

function createBG() {
  // desenha o retângulo usando x e y e a largura e altura setadas //
  context.fillStyle = "lightblue";
  context.fillRect(0, 0, 16 * quadrado, 16 * quadrado);
}

function createSnake() {
  // desenha a cobra //
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, quadrado, quadrado);
  }
}

function mostraVida() {
  let imgVida = document.getElementById("coracao");
  context.font = "32px personalizada";
  context.fillStyle = "black";
  context.fillText(vidasQtd, 50, 34);
  context.drawImage(imgVida, 0, 0);
}
var elem = document.getElementById("timer");
var timer = setInterval(mostraTimer, 1000); //set the countdown to every second
function mostraTimer() {
  if (tempo == -1) {
    clearTimeout(timer);
  } else {
    elem.innerHTML = "Tempo: " + tempo;
    tempo--; //interação da subtração de tempo
  }

  if (tempo < 0) {
    clearInterval(game);
    alert("Game Over ! :(");
    document.location.reload(alert);
  }
}

function criarComida() {
  context.fillStyle = "red";
  context.fillRect(comida.x, comida.y, quadrado, quadrado);
}
function criarObst() {
  context.fillStyle = "purple";
  context.fillRect(obst.x, obst.y, quadrado, quadrado);
}
function criarObst2() {
  context.fillStyle = "purple";
  context.fillRect(obst2.x, obst2.y, quadrado, quadrado);
}
function criarObst3() {
  context.fillStyle = "purple";
  context.fillRect(obst3.x, obst3.y, quadrado, quadrado);
}
function criarObst4() {
  context.fillStyle = "purple";
  context.fillRect(obst4.x, obst4.y, quadrado, quadrado);
}
function criarObst5() {
  context.fillStyle = "purple";
  context.fillRect(obst5.x, obst5.y, quadrado, quadrado);
}
function criarObst6() {
  context.fillStyle = "purple";
  context.fillRect(obst6.x, obst6.y, quadrado, quadrado);
}
function criarObst7() {
  context.fillStyle = "purple";
  context.fillRect(obst7.x, obst7.y, quadrado, quadrado);
}
function criarObst8() {
  context.fillStyle = "purple";
  context.fillRect(obst8.x, obst8.y, quadrado, quadrado);
}
function criarObst9() {
  context.fillStyle = "purple";
  context.fillRect(obst9.x, obst9.y, quadrado, quadrado);
}
function criarObst10() {
  context.fillStyle = "purple";
  context.fillRect(obst10.x, obst10.y, quadrado, quadrado);
}
// desenha o obstáculo //


document.addEventListener("keydown", update);
// quando um evento acontece, detecta e chama uma função //

function update(event) {
  if (event.keyCode == 37 && direcao != "right") direcao = "left";
  if (event.keyCode == 38 && direcao != "down") direcao = "up";
  if (event.keyCode == 39 && direcao != "left") direcao = "right";
  if (event.keyCode == 40 && direcao != "up") direcao = "down";
}

function startGame() {
  if (snake[0].x > 15 * quadrado && direcao == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direcao == "left") snake[0].x = 16 * quadrado;
  if (snake[0].y > 15 * quadrado && direcao == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direcao == "up") snake[0].y = 16 * quadrado;

  for (i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(game);
      alert("Game Over ! :(");
      document.location.reload(alert);
    }
  }

  mostraTimer(tempo, mostra);
  createBG();
  createSnake();
  criarComida();
  criarObst();
  criarObst2();
  criarObst3();
  criarObst4();
  criarObst5();
  criarObst6();
  criarObst7();
  criarObst8();
  criarObst9();
  criarObst10();
  mostraVida();

  //--------------------------- Condições -------------------------------//

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direcao == "right") snakeX += quadrado;
  if (direcao == "left") snakeX -= quadrado;
  if (direcao == "up") snakeY -= quadrado;
  if (direcao == "down") snakeY += quadrado;

  if (snakeX != comida.x || snakeY != comida.y) {
    snake.pop(); // pop tira o último elemento da lista
  } else {
    quantidadeComida += 1;
    tempo += 16;
    comida.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    comida.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  }

  if (quantidadeComida == 3){ // Vida adicional após comer 3 maças
    quantidadeComida = 0; // quantidadeComida volta a zero para continuar entrando nesta condição
    vidasQtd = vidasQtd + 1;
  }

  
  if (snake.length >= 15) { // Condição vitória
    alert("vitória ! :)");
    document.location.reload(alert);
  }
  
  //================== OBSTACULOS =====================//
  if (snakeX == obst.x && snakeY == obst.y) {
    vidasQtd -= 1;
    obst.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    obst.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  } else if (snakeX == obst2.x && snakeY == obst2.y) {
    vidasQtd -= 1;
    obst2.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    obst2.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  } else if (snakeX == obst3.x && snakeY == obst3.y) {
    vidasQtd -= 1;
    obst3.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    obst3.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  } else if (snakeX == obst4.x && snakeY == obst4.y) {
    vidasQtd -= 1;
    obst4.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    obst4.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  } else if (snakeX == obst5.x && snakeY == obst5.y) {
    vidasQtd -= 1;
    obst5.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    obst5.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  } else if (snakeX == obst6.x && snakeY == obst6.y) {
    vidasQtd -= 1;
    obst6.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    obst6.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  } else if (snakeX == obst7.x && snakeY == obst7.y) {
    vidasQtd -= 1;
    obst7.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    obst7.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  } else if (snakeX == obst8.x && snakeY == obst8.y) {
    vidasQtd -= 1;
    obst8.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    obst8.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  } else if (snakeX == obst9.x && snakeY == obst9.y) {
    vidasQtd -= 1;
    obst9.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    obst9.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  } else if (snakeX == obst10.x && snakeY == obst10.y) {
    vidasQtd -= 1;
    obst10.x = Math.floor(Math.random() * 15 + 1) * quadrado;
    obst10.y = Math.floor(Math.random() * 15 + 1) * quadrado;
  }

  if (vidasQtd <= 0) { // game over pelo tempo
    alert("Game Over :(");
    document.location.reload(alert);
  }
  if (vidasQtd > 5) { // Não deixa vida ser maior que 5
    vidasQtd = 5;
  }
  //-------------------------------------------------------------------------//

  let novaCabeca = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(novaCabeca);
  // método unshift adiciona o primeiro quadrado da cobrinha
}

let game = setInterval(startGame, 160);
