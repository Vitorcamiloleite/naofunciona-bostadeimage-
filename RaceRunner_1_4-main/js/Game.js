class Game {
  constructor() {}

  getState() {//método que irá ler o gameState do banco de dados
      var gameStateRef = database.ref("gameState");//me referindo a chave gameState criada no bd
      //criando um ouvinte que fica acompanhando a mudança no valor da variável gameState no bd.
      gameStateRef.on("value", function(data) {  
        gameState = data.val()      
      
    });
  }

  update(state) {//método que irá atualizar o gameState no bd para um valor passado para ele como parâmetro
    database.ref("/").update({//se refere ao banco de dados principal dentro do qual gameState é criado
      gameState: state
    });

  }
  start() {//método para obter o gameState e então iniciar o jogo
    //instância de um novo jogador
    player = new Player();
    //inciando a variável playerCount
    form = new Form();
    form.display();

    //criar sprites dos jogadores
      car1 = createSprite(width/2 - 50, height - 100)
      car1.addImage("car1",car1_img)
      car1.scale = 0.07

      car2 = createSprite(width/2 + 100, height - 100)
      car2.addImage("car2",car2_img)
      car2.scale = 0.07

      //atribuindo os objetos ao vetor cars
    cars = [car1, car2]
    fuels = new Group()
    powerCoins = new Group()
    this.addSprites(fuels, 4, fuelImage, 0.02)
    this.addSprites(powerCoins, 18, powerCoinsImage, 0.09)
  }
  addSprites(spriteGroup, numberOfSprites, spriteImage, scale) {
    for(var i = 0; i < numberOfSprites; i++) {
      var x, y;
      x = random(width / 2 + 150, width / 2 - 150);//posição para os dois sprites
      y = random(-height * 4.5, height - 400);//posição para os dois sprites
 
      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);
 
      sprite.scale = scale;
      spriteGroup.add(sprite);
    }
  }

  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffects");
  }

  play() {
    //função para esconder os elementos
    this.handleElements();
    //desenhar os sprites
    Player.getPlayersInfo()
    if(allPlayers !== undefined){
  image(track,0, - height * 5,width, height *6)
  var index = 0
  for(var plr in allPlayers){
    var x = allPlayers[plr].positionX
    var y = height - allPlayers[plr].positionX
    index = index +1
    cars[index -1].position.x = x
    cars[index -1].position.y = y
    
  if(index === player.index){
    stroke(10)
    fill("red")
    ellipse(x,y,60,60)
    this.handleFuel(index)
    this.handlePowerCoins(index)
  }
  
  
  
  
  }    
    if(keyDown(UP_ARROW)){
      player.positionY += 10
      player.update
    }
}
    
    
    
    
    
    drawSprites()

    
  }
handleFuel(index){
cars[index - 1].overlap(fuels,function(colector,colected) {
  player.fuel = 185
  colected.remove()
})

}
handlePowerCoins(index){
cars[index - 1].overlap(powerCoins,function(colector,colected) {
player.score += 21
player.update()
colected.remove()
})
}
}
