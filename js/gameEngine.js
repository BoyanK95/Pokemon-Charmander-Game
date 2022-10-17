function start(state, game) {
    game.createCharmander(state);
    window.requestAnimationFrame(gameLoop.bind(null, state, game))
    
}

function gameLoop(state, game) {
    let {charmander} = state;
    let {charmanderElement} = game;
    
    modifyCharmanderPos(state, game)
    if (state.keys.Space) {
        game.charmanderElement.style.backgroundImage =  "url('../images/charAttack.webp')";
        game.createFireball(charmander, state.fireball)
    }else{
        game.charmanderElement.style.backgroundImage = "url('../images/charNormalState.png')";
    }


    //render firebal
    document.querySelectorAll('.fireball').forEach(fireball =>{
        fireball.style.left = parseInt(fireball.style.left) + state.fireball.speed + 'px';
    })

    //render charmander
    charmanderElement.style.top = charmander.posY + 'px';
    charmanderElement.style.left = charmander.posX + 'px';
    window.requestAnimationFrame(gameLoop.bind(null, state, game))
}

function modifyCharmanderPos(state, game) {
    let {charmander} = state;
    
    if (state.keys.KeyW){
        charmander.posY = Math.max(charmander.posY - charmander.speed, 0);
    }
    if (state.keys.KeyS){
        charmander.posY = Math.min(charmander.posY + charmander.speed, document.body.clientHeight - charmander.height);
    }
    if (state.keys.KeyA){
        charmander.posX = Math.max(charmander.posX - charmander.speed, 0);
    }
    if (state.keys.KeyD){
        charmander.posX =  Math.min(charmander.posX + charmander.speed, document.body.clientWidth - charmander.width);
    }
}