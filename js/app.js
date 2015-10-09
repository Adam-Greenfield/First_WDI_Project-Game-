console.log("working");
// start();


// var playerOne = null;
// var playerTwo = null;

playerOneButton = document.getElementById("playerOneButton")
playerOneButton.addEventListener("click", playerOneSelect)

playerTwoButton = document.getElementById("playerTwoButton")
playerTwoButton.addEventListener("click", playerTwoSelect)





//the following doesn't work atm
function playerOneSelect() {
  selection = document.getElementsByClassName("test");
  for (i = 0; i < selection.length; i ++){
    
    
    selection[i].addEventListener("click", getPlayerOne)

    for (i = 0; i < selection.length; i ++){
    // setTimeout(function(){
    //   this.removeEventListener("click", getPlayerOne)
    // }, 5000)
  }
}
    // setTimeout(function(){
    //   thing.addEventListener("click", getPlayerTwo)
    // }, 10000)
    // setTimeout(function(){
    //   thing.removeEventListener("click", getPlayerTwo)
    // }, 15000)
    
    
  
}
function playerTwoSelect() {
  selection = document.getElementsByClassName("test");
  for (i = 0; i < selection.length; i ++){

    selection[i].addEventListener("click", getPlayerTwo)

    for (i = 0; i < selection.length; i ++){
      setTimeout(function(){
        selection[i].removeEventListener("click", getPlayerTwo)
      }, 5000)
    }
  }
}



function getPlayerOne() {
  console.log("hello")
  playerOne = this.id;
  console.log("Player One is " + playerOne)
}

function getPlayerTwo() {
  console.log("hello")
  playerTwo = this.id;
  console.log("Player Two is " + playerTwo)
}

// var getChicken = function(){
//   var selection = document.getElementsByTagName("button");
//   for (i = 0; i < selection.length; i ++){
//     selection[i].addEventListener("click", function(){
//       return this.getAttribute("id");

//     })
//   }
// }




// function start(){
//   console.log("Player 1 get chicken!")
//   playerOne = getChicken;
//   if (playerOne == true){
//     console.log("Player 2 get chicken!")
//     playerTwo = getChicken;
//     //start fight
//   }
// }

// Chicken objects
var Chicken = {
  chicken_name: "Something",
  health: 0,
  speed: 0,
  move1:function(target){

  },
  move2:function(target){

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

var chicken1 = Object.create(Chicken);
  chicken1.health = 100
  chicken1.speed = 7
  chicken1.name = "Gary"



var chicken2 = Object.create(Chicken);
  chicken2.health = 50
  chicken2.speed = 10
  chicken2.name = "Ash"
  
  



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