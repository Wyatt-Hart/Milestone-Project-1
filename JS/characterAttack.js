let isAttacking = false
function attack(){
    if ( keys["1"] && isAttacking == false){
        isAttacking = true
        if(player.y < 310){
            currentDirection = charAirAttack
            animationLoopX = [0, 1]
            animationLoopY = [0, 1, 2, 3]
            animationMax = 7
        }else{
            characterImg.src = './assets/Main_Character/Attacks.png'
            animationLoopX = [0, 1, 2, 3, 4, 5, 6, 7]
            animationLoopY = [0, 1, 2]
            animationMax = 18
        }
        animationIndex = 0
        currentXLoopIndex = 0
        currentYLoopIndex = 0
    }else if(currentDirection == charAirAttack && player.y == 310){
        currentDirection = charIdle
        setTimeout(() => {
            characterImg.src = currentDirection
        }, 200);
    }else if( !keys["1"] && isAttacking == true ){
        animationLoopX = [0, 1]
        animationLoopY = [0, 1, 2, 3]
        characterImg.src = currentDirection
        isAttacking = false
        animationMax = 8
    }
}