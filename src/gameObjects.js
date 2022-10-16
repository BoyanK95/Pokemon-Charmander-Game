function initGameObjects() {
    const startScreen = document.querySelector(".start-screen");
    const gameScreen = document.querySelector(".game-screen");
    const scoreScreen = document.querySelector(".score");
  
    return {
      startScreen,
      gameScreen,
      scoreScreen,
      createcharmander(initState){
        let charmanderElement = document.createElement('div');
        charmanderElement.classList.add('charmander');
  
        
        
        charmanderElement.style.height = initState.height + 'px';
        charmanderElement.style.width = initState.width + 'px';
  
        charmanderElement.style.left = initState.posX + 'px';
        charmanderElement.style.top = initState.posY + 'px';
        
        this.charmanderElement = charmanderElement;
        gameScreen.appendChild(charmanderElement);
  
        return charmanderElement;
      },
      createFireball(charmander, fireball){
        let fireballElement = document.createElement('div');
        fireballElement.classList.add('fireball');
        fireballElement.style.left = charmander.posX + charmander.width  + 'px';
        fireballElement.style.top = charmander.posY + charmander.height / 3 + 5 + 'px';
        fireballElement.style.width = fireball.width + 'px';
        fireballElement.style.height = fireball.height + 'px';
        
        gameScreen.appendChild(fireballElement);
      },
      createBug(stats) {
        const bugElement = document.createElement('div');
        bugElement.classList.add('bug');
        bugElement.style.width = stats.width + 'px';
        bugElement.style.height = stats.height + 'px';
        bugElement.style.left = gameScreen.offsetWidth - stats.width+ 'px';
        bugElement.style.top = Math.floor(Math.random() * (gameScreen.offsetHeight - stats.height)) + 'px';
  
        gameScreen.appendChild(bugElement);
      }
    };
  }