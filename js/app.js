console.log("working");
// start();


var playerOne = null;
var playerTwo = null;

playerOneButton = document.getElementById("playerOneButton")
playerOneButton.addEventListener("click", playerOneSelect)

playerTwoButton = document.getElementById("playerTwoButton")
playerTwoButton.addEventListener("click", playerTwoSelect)

fightStartButton = document.getElementById("startFight")
fightStartButton.addEventListener("click", fight)



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
        console.log("p1 chooses Gary!")
        break;
    case "Ash":
      p1chicken = Object.create(Chicken);
      p1chicken.health = 100,
      p1chicken.speed = 10,
      p1chicken.name = "Ash"
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
  function getPlayerOneMove(move){
    var moves = [0,1,2,3]
    console.log("select 0 1 2 or 3")
    
  }
}


// Chicken objects
var Chicken = {
  chicken_name: "Something",
  health: 0,
  speed: 0,
  move1:function oneHit(target){
    target.health = target.health - 10
  },
  move2:function twoHit(target){
    target.health = target.health - 20
  },
  move3:function(target){

  },
  move4:function(target){
    
  },
  move5:function(target){
    
  },
  move6:function(target){
    
  },
  move7:function(target){
    
  },
  move8:function(target){
    
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