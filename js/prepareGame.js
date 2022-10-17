function prepareGame() {
  let playScreen = document.getElementsByClassName("play-game")[0];

  return {
    createCharmander(initState) {
      let charmanderElement = document.createElement("div");
      charmanderElement.style.backgroundImage =
        "url('../images/charNormalState.png')";
      charmanderElement.style.position = "absolute";
      charmanderElement.style.width = initState.charmander.width + 'px';
      charmanderElement.style.height = initState.charmander.height + 'px';
      charmanderElement.style.top = initState.charmander.posY + 'px';
      charmanderElement.style.left = initState.charmander.posX + 'px';
      charmanderElement.style.backgroundSize = initState.charmander.cover;

      playScreen.appendChild(charmanderElement);

      this.charmanderElement = charmanderElement;
      return charmanderElement;
    },
    createFireball(charmander, fireball){
        let fireballElement = document.createElement('div');
        fireballElement.classList.add('fireball');
        fireballElement.style.position = 'absolute';
        fireballElement.style.left = charmander.posX  + charmander.width+ 'px';
        fireballElement.style.top = charmander.posY  + 20+ 'px';
         fireballElement.style.width = fireball.width + 'px';
        fireballElement.style.height = fireball.height + 'px';
        this.fireballElement = fireballElement;
        playScreen.appendChild(fireballElement);
        return fireballElement;
    }
  };
}
