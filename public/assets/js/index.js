import EnemyController from "/assets/js/EnemyController.js";
import Player from "/assets/js/Player.js";
import BulletController from "/assets/js/BulletController.js";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 600;

const background = new Image();
background.src = "/assets/images/Data-Centres-Ireland-1.webp";

const playerBulletController = new BulletController(canvas, 10, 'green');
const enemyController = new EnemyController(canvas);
const player = new Player(canvas, 3, playerBulletController);

function game() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  enemyController.draw(ctx);
  player.draw(ctx);
  playerBulletController.draw(ctx);
}

setInterval(game, 1000 / 60);
