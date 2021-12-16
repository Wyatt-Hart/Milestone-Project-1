let canvas = document.querySelector('#gameCanvas')
let canvasContext = canvas.getContext('2d')

function makeBackground(){
    let backgroundCanvas = document.querySelector('#background')
    let backgroundContext = backgroundCanvas.getContext('2d')
    let backgroundImg1 = new Image();
    let backgroundImg2 = new Image();
    let backgroundImg3 = new Image();
    let backgroundImg4 = new Image();
    let backgroundImg5 = new Image();
    backgroundImg1.src = './assets/Background/01_background.png'
    backgroundImg2.src = './assets/Background/02_background.png'
    backgroundImg3.src = './assets/Background/03_background.png'
    backgroundImg4.src = './assets/Background/04_background.png'
    backgroundImg5.src = './assets/Background/05_background.png'
    backgroundContext.drawImage(backgroundImg1, 0, 0, 425, 380, 0, 0, canvas.width, canvas.height)
    backgroundContext.drawImage(backgroundImg2, 0, 0, 425, 380, 0, 0, canvas.width, canvas.height)
    backgroundContext.drawImage(backgroundImg3, 0, 0, 425, 380, 0, 0, canvas.width, canvas.height)
    backgroundContext.drawImage(backgroundImg4, 0, 0, 425, 380, 0, 0, canvas.width, canvas.height)
    backgroundContext.drawImage(backgroundImg5, 0, 0, 425, 380, 0, 0, canvas.width, canvas.height)
}



function gameLoop(){
    window.requestAnimationFrame(step)
    movePlayer()
    makeBackground()
}
setInterval(()=>{
    gameLoop()
}, 1000/15)