const $rockButton1 = document.querySelector('.rock-button-player-1')
const $paperButton1 = document.querySelector('.paper-button-player-1')
const $scissorsButton1 = document.querySelector('.scissors-button-player-1')
const $rockButton2 = document.querySelector('.rock-button-player-2')
const $paperButton2 = document.querySelector('.paper-button-player-2')
const $scissorsButton2 = document.querySelector('.scissors-button-player-2')
const $player1Field = document.querySelector('.player-1-field')
const $player2Field = document.querySelector('.player-2-field')
const $resetButton = document.querySelector('.reset-button')
const $startButton = document.querySelector('.start-button')

function player1RockMove(){
    $player1Field.innerHTML = '<img class="player-move" src="stone.png"></img>'
}

function player1PaperMove(){
    $player1Field.innerHTML = '<img class="player-move" src="paper.png"></img>'
}

function player1ScissorsMove(){
    $player1Field.innerHTML = '<img class="player-move" src="scissors.png"></img>'
}

function player2RockMove(){
    $player2Field.innerHTML = '<img class="player-move" src="stone.png"></img>'
}

function player2PaperMove(){
    $player2Field.innerHTML = '<img class="player-move" src="paper.png"></img>'
}

function player2ScissorsMove(){
    $player2Field.innerHTML = '<img class="player-move" src="scissors.png"></img>'
}

$rockButton1.addEventListener('click' , player1RockMove)

$rockButton2.addEventListener('click' , player2RockMove)

$paperButton1.addEventListener('click' , player1PaperMove)

$paperButton2.addEventListener('click' , player2PaperMove)

$scissorsButton1.addEventListener('click' , player1ScissorsMove)

$scissorsButton2.addEventListener('click' , player2ScissorsMove)
