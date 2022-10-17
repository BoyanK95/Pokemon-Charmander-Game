function start() {
    window.requestAnimationFrame(gameLoop)
}

function gameLoop() {
    console.log('gameLoop');
    window.requestAnimationFrame(gameLoop)
}