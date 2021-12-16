let enemyImg = new Image();
enemyImg.src = './assets/Enemy/enemy_atlas.png'
let eFACING_LEFT = false

const eMOVEMENT_SPEED = 30

let enemy = {
    x:150,
    y:(77),
    height: 224,
    width: 112,
    jumpHeight: (310 - (eMOVEMENT_SPEED * 7))
}
if (eFACING_LEFT == true){
    enemy.x = -enemy.x
}

const enemyScale = 3.8;
const scaledEnemyWidth = enemyScale * enemy.width;
const scaledEnemyHeight = enemyScale * enemy.height

let enemyPositionX = 0


let enemyAnimationIndex = 0
let enemyCurrentYIndex = 0



function drawEnemyFrame(frameX, frameY, canvasX, canvasY){
    if (eFACING_LEFT == true){
        enemy.x = -Math.abs(enemy.x)
        canvasContext.setTransform(-1, 0, 0, 1, scaledEnemyWidth * 2, 0);
    }else if (eFACING_LEFT == false){
        canvasContext.setTransform(1, 0, 0, 1, 0, 0);
        enemy.x = Math.abs(enemy.x)
    }
    canvasContext.drawImage(enemyImg,
                            frameX * enemy.width * 2, frameY * enemy.height, enemy.width * 2, enemy.height,
                            enemy.x, enemy.y, scaledEnemyWidth * 2, scaledEnemyHeight)
}
