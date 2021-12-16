
let charIdle = './assets/Main_Character/Idle.png'
let FACING_RIGHT = './assets/Main_Character/Run_Right.png'
let FACING_LEFT = './assets/Main_Character/Run_Left.png'
let charJump = './assets/Main_Character/Jump.png'
let charCrouch = './assets/Main_Character/crouch_idle.png'
let currentDirection = charIdle

let characterImg = new Image();
characterImg.src = currentDirection

const MOVEMENT_SPEED = 30

let player = {
    x:10,
    y:(310),
    height: 64,
    width: 64,
    jumpHeight: (310 - (MOVEMENT_SPEED * 7))
}


const characterScale = 3;
const scaledWidth = characterScale * player.width;
const scaledHeight = characterScale * player.height

let positionX = 0
let keyPresses = {}

let hasJumped = false

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
    idleCheck()
    setTimeout(()=>{
        if(currentXLoopIndex >= animationLoopX.length){
            currentXLoopIndex = 0
            currentYLoopIndex++
            if(currentYLoopIndex >= animationLoopY.length){
                currentYLoopIndex = 0
            }
        }
        canvasContext.clearRect( 0, 0, canvas.width, canvas.height )
        drawFrame( animationLoopX[ currentXLoopIndex ] * 2, animationLoopY [currentYLoopIndex], 0, 0 )
        currentXLoopIndex++
        animationIndex++
        if (animationIndex > animationMax){
            currentXLoopIndex = 0
            currentYLoopIndex = 0
            animationIndex = 0
        }
    }, 10)
}


function drawFrame(frameX, frameY, canvasX, canvasY){
    canvasContext.drawImage(characterImg,
                            frameX * player.width, frameY * player.height, player.width * 2, player.height,
                            player.x, player.y, scaledWidth * 2, scaledHeight)
}
