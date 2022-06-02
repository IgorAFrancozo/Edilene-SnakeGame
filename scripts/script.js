let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake = [];

// Array cobrinha
snake[0] = {
    x: 12 * box,
    y: 12 * box
};

let direction = "right";
let score = 00;


let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let obst = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let obst2 = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let obst3 = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let obst4 = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let obst5 = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let obst6 = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let obst7 = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let obst8 = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let obst9 = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let obst10 = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//---------------------------------------- Funções ------------------------------------//

function createBG() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16 * box, 16 * box);

    // desenha o retângulo usando x e y e a largura e altura setadas //
}

function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // desenha a cobra //
}

function criarComida() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}
function criarObst() {
    context.fillStyle = "purple";
    context.fillRect(obst.x, obst.y, box, box);
}
function criarObst2() {
    context.fillStyle = "purple";
    context.fillRect(obst2.x, obst2.y, box, box);
}
function criarObst3() {
    context.fillStyle = "purple";
    context.fillRect(obst3.x, obst3.y, box, box);
}
function criarObst4() {
    context.fillStyle = "purple";
    context.fillRect(obst4.x, obst4.y, box, box);
}
function criarObst5() {
    context.fillStyle = "purple";
    context.fillRect(obst5.x, obst5.y, box, box);
}
function criarObst6() {
    context.fillStyle = "purple";
    context.fillRect(obst6.x, obst6.y, box, box);
}
function criarObst7() {
    context.fillStyle = "purple";
    context.fillRect(obst7.x, obst7.y, box, box);
}
function criarObst8() {
    context.fillStyle = "purple";
    context.fillRect(obst8.x, obst8.y, box, box);
}
function criarObst9() {
    context.fillStyle = "purple";
    context.fillRect(obst9.x, obst9.y, box, box);
}
function criarObst10() {
    context.fillStyle = "purple";
    context.fillRect(obst10.x, obst10.y, box, box);
}

// desenha a comida //


// desenha o obstáculo //

document.addEventListener('keydown', update);

// quando um evento acontece, detecta e chama uma função //

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

function startGame() {
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert('Game Over ! :(');

            document.location.reload(alert);
        }

    }

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


    //--------------------------- Condições -------------------------------//

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); // pop tira o último elemento da lista
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    //================== IF OBSTACULOS =====================//

    if (snake.length >= 15) {
        alert('La vitória ! :)')
        document.location.reload(alert);
    }

    if (snakeX == obst.x && snakeY == obst.y) {
        alert('Game Over :(');
        document.location.reload(alert);
    } else if (snakeX == obst2.x && snakeY == obst2.y) {
        alert('Game Over :(');
        document.location.reload(alert);
    } else if (snakeX == obst3.x && snakeY == obst3.y) {
        alert('Game Over :(');
        document.location.reload(alert);
    } else if (snakeX == obst4.x && snakeY == obst4.y) {
        alert('Game Over :(');
        document.location.reload(alert);
    } else if (snakeX == obst5.x && snakeY == obst5.y) {
        alert('Game Over :(');
        document.location.reload(alert);
    } else if (snakeX == obst6.x && snakeY == obst6.y) {
        alert('Game Over :(');
        document.location.reload(alert);
    } else if (snakeX == obst7.x && snakeY == obst7.y) {
        alert('Game Over :(');
        document.location.reload(alert);
    } else if (snakeX == obst8.x && snakeY == obst8.y) {
        alert('Game Over :(');
        document.location.reload(alert);
    } else if (snakeX == obst9.x && snakeY == obst9.y) {
        alert('Game Over :(');
        document.location.reload(alert);
    } else if (snakeX == obst10.x && snakeY == obst10.y) {
        alert('Game Over :(');
        document.location.reload(alert);
    }
    //-------------------------------------------------------------------------//

    let novaCabeca = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(novaCabeca);
    // método unshift adiciona o primeiro quadrado da cobrinha
}

let game = setInterval(startGame, 160);