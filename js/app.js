console.log("working");
// start();

turn: 0
var playerOne = null;
var playerTwo = null;
var playerOneMove = null;
var playerTwoMove = null;
var pOneMove = null;
var pTwoMove = null;
var p1chicken = null;
var p2chicken = null;
var compChicken = false;
var compMove = null;
var textBox1 = document.getElementById("info1")
var textBox2 = document.getElementById("info2")

fightComputerButton = document.getElementById("AI_initiate")
fightComputerButton.addEventListener("click", getCompChicken)



var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

function startGame(){
  var p1chicken = null;
  var p2chicken = null;
  var playerOne = null;
  var playerTwo = null;
  var playerOneMove = null;
  var playerTwoMove = null;
  var pOneMove = null;
  var pTwoMove = null;
  textBox1.innerHTML = ""
  textBox2.innerHTML = ""
  showText("#info1", "Player One choose a chicken!", 0, 50);  
}

function isCompTrue(){
  if (compChicken == false){
    compChicken = true
  }
  else if (compChicken == true){
    compChicken = false
  }
  console.log(compChicken)
}

function getCompChicken(){
  isCompTrue()
  var randC = Math.random()
  if (randC <0.33){
    playerTwo = "Gary"
  }
  else if (randC < 0.66){
    playerTwo = "Ash"
  }
  else if (randC <= 1){
    playerTwo = "Bork-y"
  }
  // textBox2.innerHTML ="Player Two is " + playerTwo

    textBox2.innerHTML = ""
    showText("#info2", "Player Two is " + playerTwo, 0, 50);   

 
}

function getCompMove(){
  var randM = Math.random()
  if (randM < 0.25){
    compMove = "p2move1"
  }
  else if (randM < 0.50){
    compMove = "p2move2"
  }
  else if (randM < 0.75){
    compMove = "p2move3"
  }
  else if (randM <= 1){
    compMove = "p2move4"
  }
  console.log(compMove)
}

playerOneButton = document.getElementById("playerOneButton")
playerOneButton.addEventListener("click", playerOneSelect)

playerTwoButton = document.getElementById("playerTwoButton")
playerTwoButton.addEventListener("click", playerTwoSelect)

fightStartButton = document.getElementById("startFight")
fightStartButton.addEventListener("click", fight)

function disableOne(){
  document.getElementsByClassName("playerOneMoves").disabled=true;
}
function disableTwo(){
  document.getElementsByClassName("playerTwoMoves").disabled=true;
}

function playerOneSelect(){


  selection = document.getElementsByClassName("test")
  for (i = 0; i < selection.length; i ++){

    playerOneListen = selection[i]
    playerOneListen.addEventListener("click", getPlayerOne)
  } 
}
    // setTimeout(function(){
    //   thing.addEventListener("click", getPlayerTwo)
    // }, 10000)
    // setTimeout(function(){
    //   thing.removeEventListener("click", getPlayerTwo)
    // }, 15000)



// }
function playerTwoSelect(){

  selection = document.getElementsByClassName("test");
  for (i = 0; i < selection.length; i ++){

    playerTwoListen = selection[i]
    playerTwoListen.addEventListener("click", getPlayerTwo)
  }
}


function checkForKo(){
  if (p1chicken.heath <= 0){
    // textBox1.innerHTML = "p2 has won!"
    textBox1.innerHTML = ""
    showText("#info1", "Player Two has won!", 0, 50); 
    textBox2.innerHTML = ""
    setTimeout(startGame(), 4000)
  }
  else if (p2chicken.health <= 0){
    // textBox1.innerHTML = "p1 has won!"
    textBox1.innerHTML = ""
    showText("#info1", "Player One has won!", 0, 50); 
    textBox2.innerHTML = ""
    setTimeout(startGame(), 4000)
  }
  else if ((p1chicken.health <= 0) && (p2chicken.health <=0)){
    textBox1.innerHTML = ""
    showText("#info1", "Double K.O!", 0, 50); 
    textBox2.innerHTML = ""
    setTimeout(startGame(), 4000)
  }
}

function getPlayerOne(){
  if (playerOne == null){
    playerOne = this.id;
  }
  else {console.log("One already set")}
    // textBox1.innerHTML = "Player One is " + playerOne

    textBox1.innerHTML = ""
    showText("#info1", "Player One is " + playerOne, 0, 50);   


}

function getPlayerTwo(){

  if (playerTwo == null){
    playerTwo = this.id;
  }
  else {console.log("Two already set")}
    // textBox2.innerHTML = "Player Two is " + playerTwo

    textBox2.innerHTML = ""
    showText("#info2", "Player Two is " + playerTwo, 0, 50);   


  

}

function fight(){

  switch (playerOne) {
    case "Gary":
    p1chicken = Object.create(Chicken);
    p1chicken.health = 100,
    p1chicken.maxHealth = 100,
    p1chicken.speed = 7,
    p1chicken.armour = 2,
    p1chicken.name = "Gary",
    p1chicken.move1 = Chicken.slash
    p1chicken.move2 = Chicken.topple
    p1chicken.move3 = Chicken.vampireStrike
    p1chicken.move4 = Chicken.restore
    // textBox1.innerHTML = "Player One chooses Gary!"
    textBox1.innerHTML = ""
    showText("#info1", "Player One chooses Gary!", 0, 50);   
    break;
    case "Ash":
    p1chicken = Object.create(Chicken);
    p1chicken.health = 100,
    p1chicken.maxHealth = 100,
    p1chicken.speed = 10,
    p1chicken.armour = 2,
    p1chicken.name = "Ash",
    p1chicken.move1 = Chicken.trip
    p1chicken.move2 = Chicken.topple
    p1chicken.move3 = Chicken.desperation
    p1chicken.move4 = Chicken.restore
    // textBox1.innerHTML = "Player One chooses Ash!"
    textBox1.innerHTML = ""
    showText("#info1", "Player One chooses Ash!", 0, 50); 
    break;
    case "Bork-y":
    p1chicken = Object.create(Chicken);
    p1chicken.health = 80,
    p1chicken.maxHealth = 80,
    p1chicken.speed = 10,
    p1chicken.armour = 3,
    p1chicken.name = "Bork-y"
    p1chicken.move1 = Chicken.peck
    p1chicken.move2 = Chicken.trip
    p1chicken.move3 = Chicken.armourSwitch
    p1chicken.move4 = Chicken.restore
    // textBox1.innerHTML = "player One chooses Bork-y!"
    textBox1.innerHTML = ""
    showText("#info1", "Player One chooses Bork-y!", 0, 50); 
    break;
    case "Mark Cluckerburg":
    p1chicken = Object.create(Chicken);
    p1chicken.health = 80,
    p1chicken.maxHealth = 80,
    p1chicken.speed = 10,
    p1chicken.armour = 3,
    p1chicken.name = "Mark Cluckerburg"
    p1chicken.move1 = Chicken.slash
    p1chicken.move2 = Chicken.trip
    p1chicken.move3 = Chicken.vampireStrike
    p1chicken.move4 = Chicken.sacrifice
    textBox1.innerHTML = ""
    // textBox1.innerHTML = "Player One chooses Mark Cluckerburg!"
    showText("#info1", "Player One chooses Mark Cluckerburg!", 0, 50); 
    break;
  }
  switch (playerTwo) {
    case "Gary":
    p2chicken = Object.create(Chicken);
    p2chicken.health = 100,
    p2chicken.maxHealth = 100,
    p2chicken.speed = 7,
    p2chicken.armour = 2,
    p2chicken.name = "Gary"
    p2chicken.move1 = Chicken.slash
    p2chicken.move2 = Chicken.topple
    p2chicken.move3 = Chicken.vampireStrike
    p2chicken.move4 = Chicken.restore
    // textBox2.innerHTML = "Player Two chooses Gary!"
    textBox2.innerHTML = ""
    showText("#info2", "Player Two chooses Gary!", 0, 50); 
    break;
    case "Ash":
    p2chicken = Object.create(Chicken);
    p2chicken.health = 100,
    p2chicken.maxHealth = 100,
    p2chicken.speed = 10,
    p2chicken.armour = 2,
    p2chicken.name = "Ash"
    p2chicken.move1 = Chicken.trip
    p2chicken.move2 = Chicken.topple
    p2chicken.move3 = Chicken.desperation
    p2chicken.move4 = Chicken.restore
    // textBox2.innerHTML = "Player Two chooses Ash!"
    textBox2.innerHTML = ""
    showText("#info2", "Player Two chooses Ash!", 0, 50); 
    break;
    case "Bork-y":
    p2chicken = Object.create(Chicken);
    p2chicken.health = 80,
    p2chicken.maxHealth = 80,
    p2chicken.speed = 10,
    p2chicken.armour = 3,
    p2chicken.name = "Bork-y"
    p2chicken.move1 = Chicken.peck
    p2chicken.move2 = Chicken.trip
    p2chicken.move3 = Chicken.armourSwitch
    p2chicken.move4 = Chicken.restore
    // textBox2.innerHTML = "Player Two chooses Bork-y!"
    textBox2.innerHTML = ""
    showText("#info2", "Player Two chooses Bork-y!", 0, 50); 
    break;
    case "Mark Cluckerburg":
    p2chicken = Object.create(Chicken);
    p2chicken.health = 80,
    p2chicken.maxHealth = 80,
    p2chicken.speed = 10,
    p2chicken.armour = 3,
    p2chicken.name = "Mark Cluckerburg"
    p2chicken.move1 = Chicken.slash
    p2chicken.move2 = Chicken.trip
    p2chicken.move3 = Chicken.vampireStrike
    p2chicken.move4 = Chicken.sacrifice
    // textBox2.innerHTML = "Player Two chooses Mark Cluckerburg!"
    textBox2.innerHTML = ""
    showText("#info2", "Player Two chooses Mark Cluckerburg!", 0, 50); 
    break;
  }
  changeButtons()
  displaydata()
} 
function getPlayerOneMove(){
  var moves1 = document.getElementsByClassName("p1moves");
  for (i = 0; i < moves1.length; i ++){
    moves1[i].addEventListener("click", executeOneMove)

  }

}

getPlayerOneMove()

getPlayerTwoMove()

function executeOneMove(){
  console.log("Choose a move")
  
  pOneMove = this.id
  console.log("pOneMove is " + pOneMove)
  if(compChicken === true){
    console.log("success")
    getCompMove()
    pTwoMove = compMove
    bothMoves()
  }

}

function getPlayerTwoMove(){


  var moves2 = document.getElementsByClassName("p2moves");
  for (i = 0; i < moves2.length; i ++){
    moves2[i].addEventListener("click", executeTwoMove)
  }
}


function executeTwoMove(){
  console.log("Choose a move")

  pTwoMove = this.id
  console.log("pTwoMove is " + pTwoMove)
  bothMoves();
  
}
  // else 

  function bothMoves(){
    // checkForKo()
    // textBox1.innerHTML = ""
    // showText("#info1", "Fight!", 0, 50); 
    // // textBox1.innerHTML = "fight!"
    // textBox2.innerHTML = ""
    function playerOneHit(){
      switch (pOneMove){
        case "p1move1":
        p1chicken.move1(p2chicken, p1chicken)
        break;
        case "p1move2":
        p1chicken.move2(p2chicken, p1chicken)
        break;
        case "p1move3":
        p1chicken.move3(p2chicken, p1chicken)
        break;
        case "p1move4":
        p1chicken.move4(p2chicken, p1chicken)
        break;
      }
      setTimeout(checkForKo(), 9000)
      displaydata()
    }
    function playerTwoHit(){
      if(compChicken === true){
        pTwoMove = compMove
      }
      switch (pTwoMove){
        case "p2move1":
        p2chicken.move1(p1chicken, p2chicken)
        break;
        case "p2move2":
        p2chicken.move2(p1chicken, p2chicken)
        break;
        case "p2move3":
        p2chicken.move3(p1chicken, p2chicken)
        break;
        case "p2move4":
        p2chicken.move4(p1chicken, p2chicken)
        break;
      }
      
      displaydata()
    }
    if (p1chicken.speed > p2chicken.speed){
      // textBox1.innerHTML = "Player One strikes first!"
      textBox1.innerHTML = ""
      showText("#info1", "Player One strikes first!", 0, 50); 
      textBox2.innerHTML = ""
      setTimeout(playerOneHit, 3000)
      setTimeout(playerTwoHit, 9500)
      // setTimeout(checkForKo, 15000)

    }
    else if (p2chicken.speed > p1chicken.speed){
      // textBox1.innerHTML = "Player Two strikes first!"
      textBox1.innerHTML = ""
      showText("#info1", "Player Two strikes first!", 0, 50); 
      textBox2.innerHTML = ""
      setTimeout(playerTwoHit, 3000)
      setTimeout(playerOneHit, 9500)
      // setTimeout(checkForKo, 15000)
    }
    else {
      var rand = Math.random()
      if (rand < 0.50){
        // textBox1.innerHTML = "Player Two strikes first!"
        textBox1.innerHTML = ""
        showText("#info1", "Player Two strikes first!", 0, 50); 
        textBox2.innerHTML = ""
        setTimeout(playerTwoHit, 3000)
        setTimeout(playerOneHit, 9500)
        // setTimeout(checkForKo, 15000)
      }
      else {
        // textBox1.innerHTML = "Player One strikes first!"
        textBox1.innerHTML = ""
        showText("#info1", "Player One strikes first!", 0, 50); 
        textBox2.innerHTML = ""
        setTimeout(playerOneHit, 3000)
        setTimeout(playerTwoHit, 9500)
        // setTimeout(checkForKo, 15000)
      }
    }

    
    displaydata()
  }
// else 

// All hail the Proto Chicken!
var Chicken = {
  chicken_name: "Something",
  maxHealth: 0,
  health: 0,
  speed: 0,
  armour: 0,
  slash:function(target, self){
    var damage = Math.ceil((15 - target.armour) + Math.ceil((Math.random() * 100)))
    target.health = target.health - damage
    // textBox1.innerHTML = self.name + " used Slash! Nasty!"
    textBox1.innerHTML = ""
    showText("#info1", self.name + " used Slash! Nasty!", 0, 50); 
    textBox2.innerHTML = ""
    setTimeout(function(){
     // textBox1.innerHTML = self.name + " dealt " + damage + " damage to " + target.name
     textBox1.innerHTML = ""
     showText("#info1", self.name + " dealt " + damage + " damage to " + target.name, 0, 50);
   }, 3500)
    setTimeout(checkForKo, 8000)
  },
  topple:function(target, self){
    var damage = Math.ceil(target.health / 4)
    target.health = target.health - damage
    // textBox1.innerHTML = self.name + " used Topple! Frikin' get that mother!"
    textBox1.innerHTML = ""
    showText("#info1", self.name + " used Topple! Frikin' get that mother!", 0, 50); 
    textBox2.innerHTML = ""
    setTimeout(function(){
      // textBox1.innerHTML = self.name + " dealt " + damage + " damage to " + target.name
      textBox1.innerHTML = ""
      showText("#info1", self.name + " dealt " + damage + " damage to " + target.name, 0, 50);
    }, 3500)
  },
  trip:function(target, self){
    var damage = Math.ceil(10 - target.armour)
    target.speed = target.speed - 2.5
    target.health = target.health - damage
    // textBox1.innerHTML = self.name + " used Trip! lol"
    textBox1.innerHTML = ""
    showText("#info1", self.name + " used Trip! lol", 0, 50);
    textBox2.innerHTML = ""
    setTimeout(function(){
      // textBox1.innerHTML = self.name + " dealt " + damage + " damage to " + target.name
      textBox1.innerHTML = ""
      showText("#info1", self.name + " dealt " + damage + " damage to " + target.name, 0, 50);
      // textBox2.innerHTML = target.name + "'s Speed was lowered!"
      textBox2.innerHTML = ""
      showText("#info2", target.name + "'s Speed was lowered!", 0, 50);
    }, 3500)
  },
  peck:function(target, self){
    var damage = Math.ceil(target.maxHealth / (5 - (target.armour / 2)))
    target.health = target.health - damage
    // textBox1.innerHTML = self.name + " used Peck! Nuts!"
    textBox1.innerHTML = ""
    showText("#info1", self.name + " used Peck! Nuts!", 0, 50);
    textBox2.innerHTML = "" 
    setTimeout(function(){
      // textBox1.innerHTML = self.name + " dealt " + damage + " damage to " + target.name
      textBox1.innerHTML = ""
      showText("#info1", self.name + " dealt " + damage + " damage to " + target.name, 0, 50);
    }, 3500)

  },
  vampireStrike:function(target, self){
    var damage = Math.ceil((Math.random() * 15) + (10 / target.armour))
    target.health = target.health - damage
    var heal = Math.ceil((Math.random() * 7) + 7)
    self.health = self.health + heal
    // textBox1.innerHTML = self.name + " used Vampire Strike! That's some shit right there!"
    textBox1.innerHTML = ""
    showText("#info1", self.name + " used Vampire Strike! That's some shit right there!", 0, 50);
    textBox2.innerHTML = "" 
    setTimeout(function(){
      // textBox1.innerHTML = self.name + " dealt " + damage + " damage to " + target.name
      textBox1.innerHTML = ""
      showText("#info1", self.name + " dealt " + damage + " damage to " + target.name, 0, 50);
      // textBox2.innerHTML = self.name + " stole " + heal + " life!"
      textBox2.innerHTML = ""
      showText("#info2", self.name + " stole " + heal + " life!", 0, 50);
    }, 3500)
  },
  armourSwitch:function(target, self){
    target.armor = 1
    self.armor = self.armor + 5
    // textBox1.innerHTML = self.name + " used Armour Switch! Dang!"
    textBox1.innerHTML = ""
    showText("#info1", self.name + " used Armour Switch! Dang!", 0, 50);
    textBox2.innerHTML = ""
    setTimeout(function(){
      // textBox1.innerHTML = self.name + " buffed the flip up and " + target.name + " is pants now"
      textBox1.innerHTML = ""
      showText("#info1", self.name + " buffed the flip up and " + target.name + " is pants now", 0, 50);
    }, 3500)
  },

  restore:function(target, self){
    var heal = Math.ceil(self.maxHealth / 15)
    self.health = self.health + heal
    // textBox1.innerHTML = self.name + " used Restore! What a p***y!"
    textBox1.innerHTML = ""
    showText("#info1", self.name + " used Restore! What a p***y!", 0, 50);
    textBox2.innerHTML = ""
    setTimeout(function(){
      // textBox1.innerHTML = self.name + " healed for a bunch! " + heal + " in fact!"
      textBox1.innerHTML = ""
      showText("#info1", self.name + " healed for a bunch! " + heal + " in fact!", 0, 50);
    }, 3500)
  },
  desperation:function(target, self){
    var damage = Math.ceil((self.maxHealth - self.health) / 1.5)
    target.health = target.health - damage
    // textBox1.innerHTML = self.name + " lashed out in desperation! Wowzers!"
    textBox1.innerHTML = ""
    showText("#info1", self.name + " lashed out in desperation! Wowzers!", 0, 50);
    textBox2.innerHTML = ""
    setTimeout(function(){
      // textBox1.innerHTML = self.name + " dealt " + damage + " damage to " + target.name
      textBox1.innerHTML = ""
      showText("#info1", self.name + " dealt " + damage + " damage to " + target.name, 0, 50);
    }, 3500)
  },
  sacrifice:function(target, self){
    var damage = Math.ceil((Math.random() * 20) + (25 - (target.armour * 3)))
    var selfDamage = Math.ceil(((Math.random() * 20)) + 10)
    target.health = target.health - damage
    self.health = self.health - damage
    self.armour = self.armour + 3
    // textBox1.innerHTML = self.name + " used Sacrifice! Shit!"
    textBox1.innerHTML = ""
    showText("#info1", self.name + " used Sacrifice! Shit!", 0, 50);
    textBox2.innerHTML = ""
    setTimeout(function(){
      // textBox1.innerHTML = target.name + " takes " + damage + " damage!" 
      textBox1.innerHTML = ""
      showText("#info1", target.name + " takes " + damage + " damage!" , 0, 50);
      // textBox2.innerHTML = self.name + " takes " + selfDamage + " damage and gains Armour!"
      textBox2.innerHTML = ""
      showText("#info2", self.name + " takes " + selfDamage + " damage and gains Armour!", 0, 50);
    }, 3500)
  }
}

function changeButtons(){
  var playerOneMoveOne = document.getElementById("p1move1")
  var playerOneMoveTwo = document.getElementById("p1move2")
  var playerOneMoveThree = document.getElementById("p1move3")
  var playerOneMoveFour = document.getElementById("p1move4")
  var playerTwoMoveOne = document.getElementById("p2move1")
  var playerTwoMoveTwo = document.getElementById("p2move2")
  var playerTwoMoveThree = document.getElementById("p2move3")
  var playerTwoMoveFour = document.getElementById("p2move4")

  switch (p1chicken.name){
    case "Gary":
    playerOneMoveOne.innerHTML = "Slash";
    playerOneMoveTwo.innerHTML = "Topple";
    playerOneMoveThree.innerHTML = "Vamp Strike";
    playerOneMoveFour.innerHTML = "Restore";
    break;
    case "Ash":
    playerOneMoveOne.innerHTML = "Trip";
    playerOneMoveTwo.innerHTML = "Topple";
    playerOneMoveThree.innerHTML = "Desperation";
    playerOneMoveFour.innerHTML = "Restore";
    break;
    case "Bork-y":
    playerOneMoveOne.innerHTML = "Peck";
    playerOneMoveTwo.innerHTML = "Trip";
    playerOneMoveThree.innerHTML = "Armour Switch";
    playerOneMoveFour.innerHTML = "Restore";
    break;
    case "Mark Cluckerburg":
    playerOneMoveOne.innerHTML = "Slash";
    playerOneMoveTwo.innerHTML = "Topple";
    playerOneMoveThree.innerHTML = "Vamp Strike";
    playerOneMoveFour.innerHTML = "Sacrifice";
    break;
  }

  switch (p2chicken.name){
    case "Gary":
    playerTwoMoveOne.innerHTML = "Slash";
    playerTwoMoveTwo.innerHTML = "Topple";
    playerTwoMoveThree.innerHTML = "Vamp Strike";
    playerTwoMoveFour.innerHTML = "Restore";
    break;
    case "Ash":
    playerTwoMoveOne.innerHTML = "Trip";
    playerTwoMoveTwo.innerHTML = "Topple";
    playerTwoMoveThree.innerHTML = "Desperation";
    playerTwoMoveFour.innerHTML = "Restore";
    break;
    case "Bork-y":
    playerTwoMoveOne.innerHTML = "Peck";
    playerTwoMoveTwo.innerHTML = "Trip";
    playerTwoMoveThree.innerHTML = "Armour Switch";
    playerTwoMoveFour.innerHTML = "Restore";
    break;
    case "Mark Cluckerburg":
    playerTwoMoveOne.innerHTML = "Slash";
    playerTwoMoveTwo.innerHTML = "Topple";
    playerTwoMoveThree.innerHTML = "Vamp Strike";
    playerTwoMoveFour.innerHTML = "Sacrifice";
    break;
  }
}

function displaydata(){
  var playerOneHealth = document.getElementById("p1Health")
  playerOneHealth.innerHTML = "Health " + p1chicken.health
  var playerOneSpeed = document.getElementById("p1Speed")
  playerOneSpeed.innerHTML = "Speed: " + p1chicken.speed
  var playerOneArmour = document.getElementById("p1Armour")
  playerOneArmour.innerHTML = "Armour: " + p1chicken.armour
  var playerTwoHealth = document.getElementById("p2Health")
  playerTwoHealth.innerHTML = "Health: " + p2chicken.health
  var playerTwoSpeed = document.getElementById("p2Speed")
  playerTwoSpeed.innerHTML = "Speed: " + p2chicken.speed
  var playerTwoArmour = document.getElementById("p2Armour")
  playerTwoArmour.innerHTML = "Armour: " + p2chicken.armour
}