const square = document.querySelectorAll('.square')
const pig = document.querySelectorAll('.pig')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent //60


function randomSquare() {
    square.forEach(className => {
        className.classList.remove('pig') //remove the pig from the sqaure
    })
    let randomPosition = square[Math.floor(Math.random()*16)] //square[0->15]
    randomPosition.classList.add('pig') //add pig inside square

    //assign id of the randomPosition to hitPosition
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseover' , () => {
        if(id.id === hitPosition) { //if mouseup on the pig's square
            result = result + 1 //win
            score.textContent = result
        }
    })
})

function movePig () {
    let timerId = null
    timerId = setInterval(randomSquare, 600) //speed of the game //change continually position of the pig
}

movePig()

function time() {
    currentTime--
    timeLeft.textContent=currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER')
        location.reload();
    }
}

let timerId = setInterval(time,1000)
