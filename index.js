import { SNAKE_SPEED, update as updateSnake, draw as drawSnake , getSnakeHead, snakeIntersection} from "./snake.js";
import {  update as updateFood, draw as drawFood} from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
    if(gameOver) return alert("You lose")

    const secondSinceLastRender = (currentTime - lastRenderTime)/1000;
    window.requestAnimationFrame(main)
    if(secondSinceLastRender < 1/SNAKE_SPEED) return;

    lastRenderTime = currentTime;
console.log("render")
    update();
    draw();
}

window.requestAnimationFrame(main)

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}