function start(state, game) {
    game.createCharmander(state);
    window.requestAnimationFrame(gameLoop.bind(null, state, game))
    
}

function gameLoop(state, game) {
    let {charmander} = state;
    let {charmanderElement} = game;
    modifyCharmanderPos(state, game)


    //render charmander
    charmanderElement.style.top = charmander.posY + 'px';
    charmanderElement.style.left = charmander.posX + 'px';
    window.requestAnimationFrame(gameLoop.bind(null, state, game))
}

function modifyCharmanderPos(state, game) {
    let {charmander} = state;
    
    if (state.keys.KeyW){
        charmander.posY = charmander.posY - charmander.speed;
    }
    if (state.keys.KeyS){
        charmander.posY = charmander.posY + charmander.speed;
    }
    if (state.keys.KeyA){
        charmander.posX = charmander.posX - charmander.speed;
    }
    if (state.keys.KeyD){
        charmander.posX = charmander.posX + charmander.speed;
    }
}