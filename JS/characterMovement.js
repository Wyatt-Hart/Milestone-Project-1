//I'm trying to create a function to move the character based on the JS Webgame we
//worked on, but I don't think I can move the sprite inside the canvas this way

function move(character) {
    let direction = null
    let x = screenLeft
    let y = bottom

    character.style.left = x + 'px'
    character.style.bottom = y + 'px'

    function moveCharacter(){
        if(direction == 'left'){
            x-=1
        }
        if(direction == 'right'){
            x+=1
        }
        character.style.left = x + 'px'
    }

    setInterval(moveCharacter, 1);

    document.addEventListener('keydown', (e)=>{
        if(e.repeat) return;

        if(e.key === 'KeyA'){
            direction = 'left'
            console.log('left')
        }
        if(e.key === 'KeyD'){
            direction = 'right'
            console.log('right')
        }
        callback(direction)
    })

    document.addEventListener('keyup', (e)=>{
        direction = null
        callback(direction)
    })
}