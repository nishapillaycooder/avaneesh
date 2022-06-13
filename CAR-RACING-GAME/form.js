class Form{
    constructor(){
      this.input =  createInput("").attribute("placeholder", "Name");
      this.button = createButton('play');
     this.greeting = createElement('h3')
      this.title=createElement('h2');
      this.reset=createButton('RESET')
    }

    hide(){
      this.input.hide();
      this.button.hide();
      this.title.hide()
      this.greeting.hide();
    }


  display(){
      
     this.title.html ("CAR RACING GAME");
     this.title.position(displayWidth/2,20);
     this.title.style('color', '#40E0D0');
     this.title.style('font-size', '40px');
     this.title.style('font','BOLDITALIC');
      
      this.input.position(displayWidth/2,displayHeight/2-250);
     this.button.position(displayWidth/2,displayHeight/2-200);
      this.reset.position(displayWidth-300,displayHeight-300);
      this.button.style('color', '#00ff00');

      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      

      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2,displayHeight/2-250);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
      Player.updateCarsAtEnd(0);
      database.ref('players').remove();
      location.reload();
    })
  } 

}