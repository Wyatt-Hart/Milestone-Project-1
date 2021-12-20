let playerCanvas = document.querySelector('#playerCanvas')
let playerCanvasContext = playerCanvas.getContext('2d')
let framerate = 15            //This number equals our desired frames per second
framerate = 1000 / framerate  //this takes one second, and divides it by our chosen framerate, I just thought this was more readable
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
    backgroundContext.drawImage(backgroundImg1, 0, 0, 425, 380, 0, 0, backgroundCanvas.width, backgroundCanvas.height)
    backgroundContext.drawImage(backgroundImg2, 0, 0, 425, 380, 0, 0, backgroundCanvas.width, backgroundCanvas.height)
    backgroundContext.drawImage(backgroundImg3, 0, 0, 425, 380, 0, 0, backgroundCanvas.width, backgroundCanvas.height)
    backgroundContext.drawImage(backgroundImg4, 0, 0, 425, 380, 0, 0, backgroundCanvas.width, backgroundCanvas.height)
    backgroundContext.drawImage(backgroundImg5, 0, 0, 425, 380, 0, 0, backgroundCanvas.width, backgroundCanvas.height)
}

let isPlaying = false
function gameLoop(){
    window.requestAnimationFrame(step)
    makeBackground()
    movePlayer()
    moveEnemy()
    attack()
}
/* setInterval(()=>{
    gameLoop()
}, framerate) */

let startBtn = document.querySelector("#startBtn")
startBtn.addEventListener("click", ()=>{
    if(isPlaying == false){
        console.log("Fight!")
        setTimeout(()=>{
            document.getElementById("countdown3").style.opacity = '1'
        })
        setTimeout(()=>{
            document.getElementById("countdown3").style.opacity = '0'
            document.getElementById("countdown2").style.opacity = '1'
        }, 1000)
        setTimeout(()=>{
            document.getElementById("countdown2").style.opacity = '0'
            document.getElementById("countdown1").style.opacity = '1'
        }, 2000)
        setTimeout(()=>{
            document.getElementById("countdown1").style.opacity = '0'
            document.getElementById("countdownF").style.opacity = '1'
        }, 3000)
        setTimeout(() => {
            document.getElementById("countdownF").style.opacity = '0'
            setInterval(()=>{
                gameLoop()
            }, framerate)
            isPlaying = true
        }, 4000);
    }
})