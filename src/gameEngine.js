function start(state, game) {
    game.createCharmander(state.charmander);

    window.requestAnimationFrame(timestamp =>gameLoop(state, game, timestamp));
    
}


function gameLoop(state, game, timestamp) {
    const { charmander } = state;
    const {charmanderElement } = game;

    game.scoreScreen.textContent = `${state.score} pts.`

    modifyWizzardPosition(state, game);

    if (state.keys.Space) {
        game.charmanderElement.style.backgroundImage = 'url("../images/char3.png)'

        if (timestamp > state.fireball.nextSpawnTimestamp ) {
            game.createFireball(charmander, state.fireball);
            state.fireball.nextSpawnTimestamp = timestamp + state.fireball.fireRate;
        }
    }else {
        game.charmanderElement.style.backgroundImage = 'url("../images/char3.png)';
    }

    //Spawn bugs
    if (timestamp > state.bugStats.nexSpawnTimestamp) {
        game.createBug(state.bugStats);
        state.bugStats.nexSpawnTimestamp = timestamp + Math.random() * state.bugStats.maxSpawnInterval;
    }

    //Render bugs
    let bugElements = document.querySelectorAll('.bug')
    bugElements.forEach(bug => {
        let posX = parseInt(bug.style.left);

        //Detect collision with charmander
        if (detectCollision(charmanderElement, bug)) {
            state.gameOver = true;
        }

        if (posX > 0) {
            bug.style.left = posX - state.bugStats.speed + 'px';   
        } else {
            bug.remove();
        }

    });

    //Render fireball
    document.querySelectorAll('.fireball').forEach(fireball =>{
        let posX = parseInt(fireball.style.left);

        //Detect collision
        bugElements.forEach(bug=> {
            if (detectCollision(bug,fireball)) {
                state.score += state.killScore;
                bug.remove();
                fireball.remove()
            }
        })


        if (posX > game.gameScreen.offsetWidth) {
            fireball.remove();
        }else {
            fireball.style.left = posX + state.fireball.speed + 'px';
        }
    });


    //Render wizar
    charmanderElement.style.left = charmander.posX + 'px';
    charmanderElement.style.top = charmander.posY + 'px';

    if (state.gameOver) {   
        alert(`Game Over - You had ${state.score} pts`)
    } else {
        state.score += state.scoreRate;
        window.requestAnimationFrame(gameLoop.bind(null, state, game));
    }
}

function modifyWizzardPosition(state, game) {
    const { charmander } = state
        // Move charmander
        if (state.keys.KeyA) {
            charmander.posX = Math.max(charmander.posX - charmander.speed, 0);
         }
     
         if (state.keys.KeyS) {
             charmander.posY = Math.min(charmander.posY + charmander.speed, game.gameScreen.offsetHeight - charmander.height);
          }
         if (state.keys.KeyD) {
             charmander.posX = Math.min(charmander.posX + charmander.speed, game.gameScreen.offsetWidth - charmander.width);
             
         }
         if (state.keys.KeyW && charmander.posY > 0) {
             charmander.posY = Math.max(charmander.posY - charmander.speed, 0);
          }
}

function detectCollision(objectA, objectB) {
    let first = objectA.getBoundingClientRect();
    let second = objectB.getBoundingClientRect();

    let hasCollision = !(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right);
    
    return hasCollision;
}