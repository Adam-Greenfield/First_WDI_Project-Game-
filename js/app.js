console.log("working");
// start();

turn: 0
var playerOne = null;
var playerTwo = null;
var playerOneMove = null;
var playerTwoMove = null;
var pOneMove = null;
var pTwoMove = null;
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
    p1chicken.speed = 7,
    p1chicken.name = "Gary"
    p1chicken.move1 = Chicken.moveOne
    p1chicken.move2 = Chicken.moveTwo
    p1chicken.move3 = Chicken.moveThree


    console.log("p1 chooses Gary!")
    break;
    case "Ash":
    p1chicken = Object.create(Chicken);
    p1chicken.health = 100,
    p1chicken.speed = 10,
    p1chicken.name = "Ash",
    p1chicken.move1 = Chicken.moveTwo
    p1chicken.move2 = Chicken.moveThree
    console.log("p1 chooses Ash!")
    break;
    case "Steve":
    p1chicken = Object.create(Chicken);
    p1chicken.health = 80,
    p1chicken.speed = 10,
    p1chicken.name = "Steve"
    console.log("p1 chooses Steve!")
    break;
  }
  switch (playerTwo) {
    case "Gary":
    p2chicken = Object.create(Chicken);
    p2chicken.health = 100,
    p2chicken.speed = 7,
    p2chicken.name = "Gary"
    console.log("p2 chooses Gary!")
    break;
    case "Ash":
    p2chicken = Object.create(Chicken);
    p2chicken.health = 100,
    p2chicken.speed = 10,
    p2chicken.name = "Ash"
    p2chicken.move1 = Chicken.moveThree
    p2chicken.move2 = Chicken.moveTwo
    p2chicken.move3 = Chicken.moveOne
    console.log("p2 chooses Ash!")
    break;
    case "Steve":
    p2chicken = Object.create(Chicken);
    p2chicken.health = 80,
    p2chicken.speed = 10,
    p2chicken.name = "Steve"
    console.log("p2 chooses Steve!")
    break;
  }

} 
function getPlayerOneMove(){
  var moves1 = document.getElementsByClassName("p1moves");
  for (i = 0; i < moves1.length; i ++){
    moves1[i].addEventListener("click", executeOneMove)

  }
}
getPlayerOneMove()

function executeOneMove(){
  console.log("Choose a move")
  
    pOneMove = this.id
    console.log("pOneMove is " + pOneMove)
    
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

function bothMoves(pOneMove, pTwoMove){
  function playerOneHit(){
  switch ("pOneMove"){
    case "p1move1":
    p1chicken.move1(p2chicken)
    break;
    case "p1move2":
    p1chicken.move2(p2chicken)
    break;
    case "p1move3":
    p1chicken.move3(p2chicken)
    break;
    case "p1move4":
    p1chicken.move4(p2chicken)
    break;
  }
  }
  function playerTwoHit(){
  switch ("pTwoMove"){
    case "p2move1":
    p2chicken.move1(p1chicken)
    break;
    case "p2move2":
    p2chicken.move2(p1chicken)
    break;
    case "p2move3":
    p2chicken.move3(p1chicken)
    break;
    case "p2move4":
    p2chicken.move4(p1chicken)
    break;
  }
  }
  if (p1chicken.speed > p2chicken.speed){
   playerOneHit();
   playerTwoHit();
 }
 else if (p2chicken.speed > p1chicken.speed){
  playerTwoHit
  playerOneHit
 }
}
// else 

// Chicken objects
var Chicken = {
  chicken_name: "Something",
  health: 0,
  speed: 0,
  moveOne:function oneHit(target){
    target.health = target.health - 10
  },
  moveTwo:function twoHit(target){
    target.health = target.health - 20
  },
  moveThree:function threeHit(target){
    target.speed = target.speed - 2
  },
  moveFour:function(target){

  },
  moveFive:function(target){

  },
  moveSix:function(target){

  },
  moveSeven:function(target){

  },
  moveEight:function(target){

  }
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


//chicken array (folder?)

//move list(var move = function)

//have var move = key in move array

//start function
//select chicken function
//determine turn order function
//start fight function

//LOOP
//get player 1 move (get elements by attribute move buttons)
//get player two move
//trigger move function
//check for chicken K.O.
///LOOP

//Declare victor