let isAttacking = false
function attack(){
    if ( keys["1"] && isAttacking == false){
        isAttacking = true
        characterImg.src = './assets/Main_Character/Attacks.png'
        animationIndex = 0
        currentXLoopIndex = 0
        currentYLoopIndex = 0
        animationLoopX = [0, 1, 2, 3, 4, 5, 6, 7]
        animationLoopY = [0, 1, 2]
        animationMax = 18
    }else if( !keys["1"] && isAttacking == true ){
        animationLoopX = [0, 1]
        animationLoopY = [0, 1, 2, 3]
        characterImg.src = currentDirection
        isAttacking = false
        animationMax = 8
    }
}