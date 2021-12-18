let enemyCanvas = document.querySelector('#enemyCanvas')
let enemyCanvasContext = enemyCanvas.getContext('2d')
let enemyImg = new Image();
enemyImg.src = './assets/Enemy/enemy_atlas.png'
let eFACING_LEFT = true

const eMOVEMENT_SPEED = 30

let enemy = {
    x:-600, //far left is 350, far right is -1000
    y:(77),
    height: 224,
    width: 112,
    jumpHeight: (77 - (eMOVEMENT_SPEED * 7))
}
/* if (eFACING_LEFT == true){
    enemy.x = -enemy.x
} */

const enemyScale = 3.8;
const scaledEnemyWidth = enemyScale * enemy.width;
const scaledEnemyHeight = enemyScale * enemy.height

let enemyPositionX = 0


let enemyAnimationIndex = 0
let enemyCurrentYIndex = 0
let cDVEnemy = (enemy.x + 1000)/1350 //collisionDetectionVariable enemy

function drawEnemyFrame(frameX, frameY, canvasX, canvasY){
    let cDVEnemy = (enemy.x + 1000)/1350 //collisionDetectionVariable enemy

    if (eFACING_LEFT == true){
        enemyCanvasContext.setTransform(-1, 0, 0, 1, scaledEnemyWidth * 2, 0);
    }else if (eFACING_LEFT == false){
        enemyCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
    }
    enemyCanvasContext.drawImage(enemyImg,
                            frameX * enemy.width * 2, frameY * enemy.height, enemy.width * 2, enemy.height,
                            enemy.x, enemy.y, scaledEnemyWidth * 2, scaledEnemyHeight)
}
