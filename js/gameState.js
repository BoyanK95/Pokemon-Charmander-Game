function initState() {
    let posX = 0;
    let posY = Math.floor(Math.random()* 1000);
    
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
        }
    }
}