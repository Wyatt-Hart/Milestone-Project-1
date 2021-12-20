
let charIdle = './assets/Main_Character/Idle.png'
let FACING_RIGHT = './assets/Main_Character/Run_Right.png'
let FACING_LEFT = './assets/Main_Character/Run_Left.png'
let charJump = './assets/Main_Character/Jump.png'
let charCrouch = './assets/Main_Character/crouch_idle.png'
let charAirAttack = './assets/Main_Character/attack_from_air.png'
let currentDirection = charIdle
let pFACING_RIGHT = true


let characterImg = new Image();
characterImg.src = currentDirection

const MOVEMENT_SPEED = 30

let player = {
    x:200, //far left is -150, far right is 1245
    y:(310),
    height: 64,
    width: 64,
    jumpHeight: (310 - (MOVEMENT_SPEED * 7)),
    health: 100,
    healthBar: document.querySelector("#playerHealthIndicator")
}
if (pFACING_RIGHT == false){
    player.x = -player.x
}
player.healthBar.style.width = ((player.health/100) * 77) + "%"
let cDVPlayer

const characterScale = 3;
const scaledWidth = characterScale * player.width;
const scaledHeight = characterScale * player.height

let positionX = 0
let keyPresses = {}

let hasJumped = false
let hasFlipped = false

let animationLoopX = [0, 1]
let animationLoopY = [0, 1, 2, 3]
let animationIndex = 0
let animationMax = 8
let currentXLoopIndex = 0
let currentYLoopIndex = 0
let frameCount = 0
let keys = []
let isIdle

function idleCheck(){
    isIdle = (!keys["ArrowRight"] && !keys["ArrowLeft"] && !keys["ArrowDown"] && !keys["ArrowUp"])
}
function step(){
if(pFACING_RIGHT == true){
    cDVPlayer = (player.x + 150)/1395 //collisionDetectionVariable player
}else{
    cDVPlayer = -((player.x - 150)/1395)
}
player.healthBar.style.width = ((player.health/100) * 77) + "%"
player.healthBar.style.height = "40%"
enemy.healthBar.style.width = ((enemy.health/100) * 77) + "%"
enemy.healthBar.style.height = "40%"
    idleCheck()
    setTimeout(()=>{
        if(player.health > 0){
            if(currentXLoopIndex >= animationLoopX.length){
                currentXLoopIndex = 0
                currentYLoopIndex++
                if(currentYLoopIndex >= animationLoopY.length){
                    currentYLoopIndex = 0
                }
            }
            playerCanvasContext.clearRect( player.x, 0, playerCanvas.width * 2, playerCanvas.height )
            drawFrame( animationLoopX[ currentXLoopIndex ] * 2, animationLoopY [currentYLoopIndex], 0, 0 )
            currentXLoopIndex++
            animationIndex++
            if (animationIndex > animationMax){
                currentXLoopIndex = 0
                currentYLoopIndex = 0
                animationIndex = 0
            }
        }else{
            characterImg.src = './assets/Main_Character/Death.png'
            if(animationIndex<4){
            if(currentXLoopIndex >= animationLoopX.length){
                currentXLoopIndex = 0
                currentYLoopIndex++
                if(currentYLoopIndex >= animationLoopY.length){
                    currentYLoopIndex = 0
                }
            }
            playerCanvasContext.clearRect( player.x, 0, playerCanvas.width * 2, playerCanvas.height )
            drawFrame( animationLoopX[ currentXLoopIndex ] * 2, animationLoopY [currentYLoopIndex], 0, 0 )
            currentXLoopIndex++
            animationIndex++
        }
        }
    }, 10)
    setTimeout(()=>{
        if(enemyAnimationIndex < 19){
        enemyCanvasContext.clearRect( enemy.x, enemy.y, enemyCanvas.width * 2, enemyCanvas.height )
            drawEnemyFrame( enemyAnimationIndex, enemyCurrentYIndex/ 2, 0, 0 )
            enemyAnimationIndex++
            if (enemyAnimationIndex > enemyAnimationMaxIndex){
                enemyAnimationIndex = 0
            }
        }
    }, 10)
    if (pFACING_RIGHT == false){
        playerCanvasContext.setTransform(-1, 0, 0, 1, scaledWidth * 2, 0);
    }else if (pFACING_RIGHT == true){
        playerCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
    }
}


function drawFrame(frameX, frameY, canvasX, canvasY){
    playerCanvasContext.drawImage(characterImg,
                            frameX * player.width, frameY * player.height, player.width * 2, player.height,
                            player.x, player.y, scaledWidth * 2, scaledHeight)
}
