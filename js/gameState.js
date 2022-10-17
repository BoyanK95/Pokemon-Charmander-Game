function initState() {
    let startX = Math.floor(Math.random()* 1000);
    let startY = Math.floor(Math.random()* 500);
    
    return {
        player: 'BoyanK',
        score: 0,
        charmander: {
            width: 87,
            height: 98,
            posX: startX,
            posY: startY,
            cover: 'cover',
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