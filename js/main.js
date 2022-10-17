document.getElementById('startGame').addEventListener('click', startGame);
let startScreen = document.getElementsByClassName('start-game')[0];
let playScreen = document.getElementsByClassName('play-game')[0]

function startGame(e) {
    startScreen.style.display = 'none';
    playScreen.style.display = 'block'
}