window.addEventListener("keydown", (e)=>{
    keys[e.key] = true
})
window.addEventListener("keyup", (e)=>{
    if (e.key == "ArrowUp"){
        hasJumped = false
        hasFlipped = false
        if (player.y != 310){
            while(player.y < 310){
                jumpDown()
            }
        }
    }
    delete keys[e.key]
})
function movePlayer(){
    if (((cDVEnemy+cDVPlayer) < 0.94 || (cDVEnemy+cDVPlayer) > 1.06) || player.y != 310){
        if (isAttacking == true && player.y == 310){
            return
        }
        if (keys["ArrowRight"] && player.x < 1245){
            if(pFACING_RIGHT == true){
                player.x += MOVEMENT_SPEED
                if(currentDirection == charIdle || currentDirection == charCrouch){
                    currentDirection = FACING_RIGHT
                    characterImg.src = currentDirection
                }
            }else if(pFACING_RIGHT == false){
                if(player.x > -1245){
                    player.x -= MOVEMENT_SPEED
                    if(currentDirection == charIdle || currentDirection == charCrouch){
                        currentDirection = FACING_LEFT
                        characterImg.src = currentDirection
                    }
                }
            }
        }else if (keys["ArrowLeft"]){
            if(pFACING_RIGHT == true){
                if( player.x >= -140){
                    player.x -= MOVEMENT_SPEED
                    if(currentDirection == charIdle || currentDirection == charCrouch){
                        currentDirection = FACING_LEFT
                        characterImg.src = currentDirection
                    }
                }
            }else if(pFACING_RIGHT == false){
                if (player.x <= 140){
                    player.x += MOVEMENT_SPEED
                    if( currentDirection == charIdle || currentDirection == charCrouch){
                        currentDirection = FACING_RIGHT
                        characterImg.src = currentDirection
                    }
                }
            }
        }else if (keys["ArrowDown"]){
            currentDirection = charCrouch
            characterImg.src = currentDirection
        }else if (isIdle && currentDirection != charIdle){
            currentDirection = charIdle
            characterImg.src = currentDirection
            characterImg.x--
        }
    }else if((cDVEnemy+cDVPlayer) >= 0.94 && (cDVEnemy+cDVPlayer) < 0.98){
        if (keys["ArrowLeft"]){
            if(pFACING_RIGHT == true){
                if( player.x >= -140){
                    player.x -= MOVEMENT_SPEED
                    if(currentDirection == charIdle || currentDirection == charCrouch){
                        currentDirection = FACING_LEFT
                        characterImg.src = currentDirection
                    }
                }
            }else if(pFACING_RIGHT == false){
                if (player.x <= 140){
                    player.x += MOVEMENT_SPEED
                    if( currentDirection == charIdle || currentDirection == charCrouch){
                        currentDirection = FACING_RIGHT
                        characterImg.src = currentDirection
                    }
                }
            }
        }else if (keys["ArrowDown"]){
            currentDirection = charCrouch
            characterImg.src = currentDirection
        }else if (isIdle && currentDirection != charIdle){
            currentDirection = charIdle
            characterImg.src = currentDirection
            characterImg.x--
        }
    }else if((cDVEnemy+cDVPlayer) >= 0.98 && (cDVEnemy+cDVPlayer) < 1.06){
        if (keys["ArrowRight"] && player.x < playerCanvas.width - (player.width * 4)){
            if(pFACING_RIGHT == true){
                player.x += MOVEMENT_SPEED
                if(currentDirection == charIdle || currentDirection == charCrouch){
                    currentDirection = FACING_RIGHT
                    characterImg.src = currentDirection
                }
            }else if(pFACING_RIGHT == false){
                if(player.x > -1245){
                    player.x -= MOVEMENT_SPEED
                    if(currentDirection == charIdle || currentDirection == charCrouch){
                        currentDirection = FACING_LEFT
                        characterImg.src = currentDirection
                    }
                }
            }
        }else if (keys["ArrowDown"]){
            currentDirection = charCrouch
            characterImg.src = currentDirection
        }else if (isIdle && currentDirection != charIdle){
            currentDirection = charIdle
            characterImg.src = currentDirection
            characterImg.x--
        }
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
    
        if ((cDVEnemy+cDVPlayer) >= 0.98 && (cDVEnemy+cDVPlayer) < 1.06 && hasFlipped == false && player.y != 310){
        hasFlipped == true
            if(eFACING_LEFT == true){
                eFACING_LEFT = false
                pFACING_RIGHT = false
            }else{
                eFACING_LEFT = true
                pFACING_RIGHT = true
            }
            if (enemy.x < 0){
                enemy.x = Math.abs(enemy.x)
            }else if (enemy.x > 0){
                enemy.x = -1 * Math.abs(enemy.x)
            }
            if (player.x < 0){
                player.x = Math.abs(player.x)
            }else if (player.x > 0){
                player.x = -1 * Math.abs(player.x)
            }
        }        
    console.log("hasFlipped: " + hasFlipped)
}
function jumpUp(){
    if (currentDirection != charAirAttack){
        characterImg.src = charJump
    }else{
        characterImg.src = charAirAttack
    }
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