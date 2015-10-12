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
var p1chicken = null;
var compChicken = false;
var compMove = null;

fightComputerButton = document.getElementById("AI_initiate")
fightComputerButton.addEventListener("click", getCompChicken)

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
    playerTwo = "Steve"
  }
  console.log("player two is " + playerTwo)
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




function getPlayerOne(){
  if (playerOne == null){
    playerOne = this.id;
  }
  else {console.log("One already set")}
    console.log("Player One is " + playerOne)
}

function getPlayerTwo(){

  if (playerTwo == null){
    playerTwo = this.id;
  }
  else {console.log("Two already set")}
    console.log("Player Two is " + playerTwo)
  

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


    console.log("p1 chooses Gary!")
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
    console.log("p1 chooses Ash!")
    break;
    case "Steve":
    p1chicken = Object.create(Chicken);
    p1chicken.health = 80,
    p1chicken.maxHealth = 80,
    p1chicken.speed = 10,
    p1chicken.armour = 3,
    p1chicken.name = "Steve"
    p1chicken.move1 = Chicken.peck
    p1chicken.move2 = Chicken.trip
    p1chicken.move3 = Chicken.armourSwitch
    p1chicken.move4 = Chicken.restore
    console.log("p1 chooses Steve!")
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
    console.log("p2 chooses Gary!")
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
    console.log("p2 chooses Ash!")
    break;
    case "Steve":
    p2chicken = Object.create(Chicken);
    p2chicken.health = 80,
    p2chicken.maxHealth = 80,
    p2chicken.speed = 10,
    p2chicken.armour = 3,
    p2chicken.name = "Steve"
    p2chicken.move1 = Chicken.peck
    p2chicken.move2 = Chicken.trip
    p2chicken.move3 = Chicken.armourSwitch
    p2chicken.move4 = Chicken.restore
    console.log("p2 chooses Steve!")
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
    console.log("fight!!!")
    function playerOneHit(){
      switch (pOneMove){
        case "p1move1":
        p1chicken.move1(p2chicken)
        break;
        case "p1move2":
        p1chicken.move2(p2chicken)
        break;
        case "p1move3":
        p1chicken.move3(p2chicken, p1chicken)
        break;
        case "p1move4":
        p1chicken.move4(p1chicken)
        break;
      }
    }
    function playerTwoHit(){
      if(compChicken === true){
        pTwoMove = compMove
      }
      switch (pTwoMove){
        case "p2move1":
        p2chicken.move1(p1chicken)
        break;
        case "p2move2":
        p2chicken.move2(p1chicken)
        break;
        case "p2move3":
        p2chicken.move3(p1chicken, p2chicken)
        break;
        case "p2move4":
        p2chicken.move4(p2chicken)
        break;
      }
    }
    if (p1chicken.speed > p2chicken.speed){
      console.log("p1 strikes first!")
      playerOneHit()
      playerTwoHit()
    }
    else if (p2chicken.speed > p1chicken.speed){
      console.log("p2 strikes first!")
      playerTwoHit()
      playerOneHit()
    }
    else {
      var rand = Math.random()
      if (rand < 0.50){
        playerTwoHit()
        playerOneHit()
      }
      else {
        playerOneHit()
        playerTwoHit()
      }
    }
    function checkForKo(){
      if (p1chicken.heath <= 0){
        console.log("p2 has won!")
      }
      else if (p2chicken.health <= 0){
        console.log("p1 has won!")
      }
    }
    checkForKo()
    displaydata()
  }
// else 

// Chicken objects
var Chicken = {
  chicken_name: "Something",
  maxHealth: 0,
  health: 0,
  speed: 0,
  armour: 0,
  slash:function(target){
    target.health = target.health - ((15 - target.armour) + Math.ceil((Math.random() * 5)))
  },
  topple:function(target){
    target.health = target.health - (target.health / 4)
  },
  trip:function(target){
    target.speed = target.speed - 2.5
    target.health = target.health - (10 - target.armour)
  },
  peck:function(target){
    target.health = target.health - (target.maxHealth / 5)

  },
  vampireStrike:function(target, self){
    target.health = (target.health - (Math.ceil(Math.random() * 15) + 10))
    self.health = (self.health + Math.ceil(Math.random() * 7) + 7)
  },
  armourSwitch:function(target, self){
    target.armor = 1
    self.armor = self.armor + 5 
  },
  restore:function(target){
    target.health = target.health + (target.maxHealth / 15)
  },
  desperation:function(target, self){
    target.health = target.health - (self.maxHealth - self.health) / 2
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
      playerOneMoveThree.innerHTML = "Vampire Strike";
      playerOneMoveFour.innerHTML = "Restore";
      break;
    case "Ash":
      playerOneMoveOne.innerHTML = "Trip";
      playerOneMoveTwo.innerHTML = "Topple";
      playerOneMoveThree.innerHTML = "Desperation";
      playerOneMoveFour.innerHTML = "Restore";
    case "Steve":
      playerOneMoveOne.innerHTML = "Peck";
      playerOneMoveTwo.innerHTML = "Trip";
      playerOneMoveThree.innerHTML = "Armour Switch";
      playerOneMoveFour.innerHTML = "Restore";
  }

  switch (p2chicken.name){
    case "Gary":
      playerTwoMoveOne.innerHTML = "Slash";
      playerTwoMoveTwo.innerHTML = "Topple";
      playerTwoMoveThree.innerHTML = "Vampire Strike";
      playerTwoMoveFour.innerHTML = "Restore";
      break;
    case "Ash":
      playerTwoMoveOne.innerHTML = "Trip";
      playerTwoMoveTwo.innerHTML = "Topple";
      playerTwoMoveThree.innerHTML = "Desperation";
      playerTwoMoveFour.innerHTML = "Restore";
    case "Steve":
      playerTwoMoveOne.innerHTML = "Peck";
      playerTwoMoveTwo.innerHTML = "Trip";
      playerTwoMoveThree.innerHTML = "Armour Switch";
      playerTwoMoveFour.innerHTML = "Restore";
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


// var chicken4 = Object.create(Chicken);
//   chicken2.health = 30
//   chicken2.speed = 10
//   chicken2.name = "Exodia"

// var chicken5 = Object.create(Chicken);
//   chicken2.health = 70
//   chicken2.speed = 10
//   chicken2.name = "Bork-y"

// var chicken6 = Object.create(Chicken);
//   chicken2.health = 50
//   chicken2.speed = 10
//   chicken2.name = "Rooster Booster"

// var chicken7 = Object.create(Chicken);
//   chicken2.health = 90
//   chicken2.speed = 10
//   chicken2.name = "Mark Cluckerburg"

  // ayam semani
  // undead chicken
  // cluck norris
  // born free
  // Richard
  // Domonio el fuego
  // Esperanzo
  // Cock de van
  // Not the nanado's chicken pleas don't sue me
  // sebright
  // polish
  // new hampshire
  // poowaddle
  // buff laced frizzle
