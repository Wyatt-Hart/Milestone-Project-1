window.addEventListener("keydown", (e)=>{
    keys[e.key] = true
})
window.addEventListener("keyup", (e)=>{
    if (e.key == "ArrowUp"){
        hasJumped = false
        if (player.y != 310){
            while(player.y < 310){
                jumpDown()
            }
        }
    }
    delete keys[e.key]
})
function movePlayer(){
    if (isAttacking == true){
        return
    }
    if (keys["ArrowRight"] && player.x < canvas.width - (player.width * 4)){
        player.x += MOVEMENT_SPEED
        if(currentDirection == charIdle || currentDirection == charCrouch){
            currentDirection = FACING_RIGHT
            characterImg.src = currentDirection
        }
    }else if (keys["ArrowLeft"] && player.x > -140){
        player.x -= MOVEMENT_SPEED
        if(currentDirection == charIdle || currentDirection == charCrouch){
            currentDirection = FACING_LEFT
            characterImg.src = currentDirection
        }
    }else if (keys["ArrowDown"]){
        currentDirection = charCrouch
        characterImg.src = currentDirection
    }else if (isIdle && currentDirection != charIdle){
        currentDirection = charIdle
        characterImg.src = currentDirection
        characterImg.x--
    }
    if (keys["ArrowUp"]){
        jump()
    }
}


function jump(){
    if(hasJumped == false){
        jumpUp()
    }else{
        jumpDown()
    }
}
function jumpUp(){
    characterImg.src = charJump
    if (keys["ArrowUp"] && player.y > player.jumpHeight){
        player.y = player.y -  (MOVEMENT_SPEED * 1.5)
    }
    if(player.y <= player.jumpHeight){
        hasJumped = true
    }
}
function jumpDown(){
    if(player.y != 310){
        player.y = player.y + (MOVEMENT_SPEED * 1.5)
    }
    if(player.y == 310 && characterImg.src != currentDirection){
        characterImg.src = currentDirection
    }
}