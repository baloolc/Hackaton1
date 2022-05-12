import EnemyController from "/assets/js/EnemyController.js";
import Player from "/assets/js/Player.js";
import BulletController from "/assets/js/BulletController.js";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 600;

const background = new Image();
background.src = "/assets/images/Data-Centres-Ireland-1.webp";

const playerBulletController = new BulletController(canvas, 10, "green");
const enemyBulletController = new BulletController(canvas, 4, "white");
const enemyController = new EnemyController(
  canvas,
  enemyBulletController,
  playerBulletController
);
const player = new Player(canvas, 3, playerBulletController);
let isGameOver = false;
let didWin = false;

function game() {
  checkGameOver();
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  displayGameOver();
  if (!isGameOver) {
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
  }
}

function displayGameOver() {
    if (isGameOver) {
        let text = didWin ? ['Vous avez sauvez la planète'] : ['Vous êtes mort', 'L\'avenir de la planète est foutue'];
        let textOffset = didWin ? 5 : 8;

        ctx.fillStyle = 'white';
        ctx.font = '50px Arial';
        for (let i = 0; i<text.length; i++) {
            ctx.fillText(text[i], canvas.width / textOffset, ((canvas.height / 2) + 53 * i));
        }
        
    }
}

function checkGameOver() {
  if (isGameOver) {
    return;
  }

  if (enemyBulletController.collideWith(player)) {
    isGameOver = true;
  }

  if (enemyController.collideWith(player)) {
    isGameOver = true;
  }

  if (enemyController.enemyRows.length === 0) {
    didWin = true;
    isGameOver = true;
  }
}

setInterval(game, 1000 / 60);
