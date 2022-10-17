function start(state, game) {
    let charmander  = game.createCharmander(state);
    window.requestAnimationFrame(gameLoop.bind(null, charmander))
    debugger
}

function gameLoop(charmander) {
    console.log('gameLoop');
    window.requestAnimationFrame(gameLoop.bind(null, charmander))
}