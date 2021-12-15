
let charIdle = './assets/Main_Character/Idle.png'
let FACING_RIGHT = './assets/Main_Character/Run_Right.png'
let FACING_LEFT = './assets/Main_Character/Run_Left.png'
let charJump = './assets/Main_Character/Jump.png'
let currentDirection = charIdle

let characterImg = new Image();
characterImg.src = currentDirection
characterImg.onload = function(){
    window.requestAnimationFrame(step)
}
let player = {
    x:10,
    y:310,
    height: 64,
    width: 64
}


let canvas = document.querySelector('canvas')
let canvasContext = canvas.getContext('2d')

const characterScale = 3;
const scaledWidth = characterScale * player.width;
const scaledHeight = characterScale * player.height
const MOVEMENT_SPEED = 15

let positionX = 0
let keyPresses = {}

let hasJumped = false

const animationLoopX = [0, 1]
const animationLoopY = [0, 1, 2, 3]
let currentXLoopIndex = 0
let currentYLoopIndex = 0
let frameCount = 0
let keys = []
let isIdle

function idleCheck(){
    isIdle = (!keys["ArrowRight"] && !keys["ArrowLeft"] && !keys["ArrowDown"] && !keys["ArrowUp"])
}
function step(){
    idleCheck()
    setTimeout(()=>{
        if(currentXLoopIndex >= 2){
            currentXLoopIndex = 0
            currentYLoopIndex++
            if(currentYLoopIndex >= 4){
                currentYLoopIndex = 0
            }
        }
        canvasContext.clearRect( 0, 0, canvas.width, canvas.height )
        drawFrame( animationLoopX[ currentXLoopIndex ] * 2, animationLoopY [currentYLoopIndex], 0, 0 )
        currentXLoopIndex++
        movePlayer()
    window.requestAnimationFrame(step)
    }, 100)
}


function drawFrame(frameX, frameY, canvasX, canvasY){
    canvasContext.drawImage(characterImg,
                            frameX * player.width, frameY * player.height, player.width * 2, player.height,
                            player.x, player.y, scaledWidth * 2, scaledHeight)
}


window.addEventListener("keydown", (e)=>{
    keys[e.key] = true
})
window.addEventListener("keyup", (e)=>{
    if (e.key == "ArrowUp"){
        hasJumped = false
    }
    delete keys[e.key]
})
function movePlayer(){
    if (keys["ArrowRight"] && player.x < canvas.width - (player.width * 4)){
        player.x += MOVEMENT_SPEED
        if(currentDirection == charIdle){
            currentDirection = FACING_RIGHT
            characterImg.src = currentDirection
        }
        console.log('run right')
    }else if (keys["ArrowLeft"] && player.x > -140){
        player.x -= MOVEMENT_SPEED
        if(currentDirection == charIdle){
            currentDirection = FACING_LEFT
            characterImg.src = currentDirection
        }
        console.log('run left')
    }else if (isIdle && currentDirection != charIdle){
        currentDirection = charIdle
        characterImg.src = currentDirection
        characterImg.x--
        console.log('Idle')
    }
    if (keys["ArrowUp"] && hasJumped == false){
        jump()
    }
}

movePlayer()
async function jump(){
    let jumpIndex
    setTimeout(()=>{
        if (keys["ArrowUp"] && player.y == 310 && hasJumped == false){
            jumpIndex = 0
            while ( jumpIndex < 120 ){
                player.y = player.y -  1
                jumpIndex++
                characterImg.src = charJump
            }
            if ( player.y < 251){
                hasJumped = true
            }
        }
    },)
    setTimeout(()=>{
        jumpIndex = 60
        if(jumpIndex>=60){
            while ( jumpIndex > 0  && player.y != 310){
                player.y = player.y + (MOVEMENT_SPEED * 2)
                jumpIndex--
            }
        }
        if(hasJumped && characterImg.src != currentDirection){
            characterImg.src = currentDirection
        }
    }, 100)
    if(hasJumped && characterImg.src != currentDirection){
        characterImg.src = currentDirection
    }
}