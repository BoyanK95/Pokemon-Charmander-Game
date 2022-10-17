document.getElementById('startGame').addEventListener('click', startGame);
let startScreen = document.getElementsByClassName('start-game')[0];
let playScreen = document.getElementsByClassName('play-game')[0]

let state = initState()
let game = prepareGame()

// playScreen.addEventListener('keyup', ()=>{
//     console.log('keyup');
// })
const availableKeys = [
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
    'Space',
];

document.addEventListener('keydown', (e)=>{
    if (availableKeys.includes(e.code)) {
        state.keys[e.code] = true;
        console.log(e);
    }
});

document.addEventListener('keyup', (e)=>{
    if (availableKeys.includes(e.code)) {
        state.keys[e.code] = false;
        console.log(e);
    }
});

function startGame(e) {
    startScreen.style.display = 'none';
    playScreen.style.display = 'block';

    start(state, game);
}