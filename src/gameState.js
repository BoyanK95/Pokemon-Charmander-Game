function initState() {
    let startX = Math.floor(Math.random()* 1000);
    let startY = Math.floor(Math.random()* 500);

    const state = {
        player: 'Poko',
        gameOver: false,
        score: 0,
        scoreRate: 1,
        killScore: 1000,
        charmander: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10,
        },

        bugStats:{
            width:50,
            height: 50,
            nexSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 9,
        },

        fireball: {
            width:20,
            height: 20,
            speed: 12,
            nextSpawnTimestamp: 0,
            fireRate: 300,
        },

        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
            Space: false,
        }
    }

    return state
}