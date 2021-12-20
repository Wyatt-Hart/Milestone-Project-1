let isAttacking = false
function attack(){
    if (((cDVEnemy+cDVPlayer) >= 0.92 && (cDVEnemy+cDVPlayer) <= 1.07) && enemy.health > 0 && keys["1"] && characterImg.src != charIdle){
        enemy.health = enemy.health - 1
    }
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

    if(keys["ArrowDown"]){
        if(Math.ceil(Math.random()*20) > 19){
            enemyAttack()
        }
    }else{
        enemyAttack()
    }

}

function enemyAttack(){
    if(player.health > 0){
    if(((cDVEnemy+cDVPlayer) >= 0.95) && ((cDVEnemy+cDVPlayer) <= 1.05) && enemy.health != 0){
        if(keys["1"]){
            enemyCurrentYIndex = 10
        }else{
        enemyCurrentYIndex = 6
        if(keys["ArrowDown"]){
            player.health = player.health - 0.25
        }else{
            player.health--
        }
    }
    }
}
}