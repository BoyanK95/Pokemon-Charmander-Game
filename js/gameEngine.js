function start(state, game) {
    let charmander  = game.createCharmander(state);
    window.requestAnimationFrame(gameLoop.bind(null, charmander))
    
}

function gameLoop(charmander) {
    window.requestAnimationFrame(gameLoop.bind(null, charmander))
}