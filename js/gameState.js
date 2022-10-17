function initState() {
    let posX =  Math.floor(Math.random()* 300);
    let posY = Math.floor(Math.random()* 500);
    
    return {
        player: 'BoyanK',
        score: 0,
        charmander: {
            width: 86,
            height: 100,
            posX,
            posY,
            cover: 'cover',
            speed: 10
        },
        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
            Space: false,
        },
        fireball: {
            width: 40,
            height: 40,
            speed: 7
        }
    }
}