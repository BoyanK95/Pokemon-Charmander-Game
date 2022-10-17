function initState() {
    let posY = Math.floor(Math.random() * 1000)
    
    return {
        player: 'BoyanK',
        score: 0,
        charmander: {
            width: 87,
            height: 98,
            posY,
            cover: 'cover'
        }
    }
}