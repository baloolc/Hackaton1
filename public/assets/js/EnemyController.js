export default class EnemyController {

    enemyMap = [
        [0, 3, 1, 1, 1, 1, 2, 1, 1, 3, 1],
        [1, 1, 1, 2, 0, 2, 1, 2, 1, 1, 1],
        [3, 3, 3, 1, 1, 1, 2, 1, 0, 1, 1],
        [1, 2, 1, 1, 3, 1, 1, 0, 1, 3, 1],
    ];

    enemyRows = [];

    constructor(canvas){
        this.canvas = canvas;
        this.createEnemies();
    }

    draw(ctx) {
    }

    createEnemies() {
        this.enemyMap.forEach((row, rowIndex)=>{
        this.enemyRows[rowIndex] = [];
        row.forEach((enemyNumber, enemyIndex =>{
            if(enemyNumber > 0) {
                this.enemyRows[rowIndex].push(
                    new Enemy(enemyIndex * 50, rowIndex * 35, enemyNumber))
            }
        }));
    });
    }
}