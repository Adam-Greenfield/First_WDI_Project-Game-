console.log("working");
// start();

Game = {
  playerOne: ""

}
var playerOne = null;
var playerTwo = null;

playerOneSelect()

function playerOneSelect() {
  selection = document.getElementsByClassName("test");
  for (i = 0; i < selection.length; i ++){
    console.log("looping")
    thing = selection[i];
    thing.addEventListener("click", getPlayerOne)
    setTimeout(function(){
      thing.removeEventListener("click", getPlayerOne)
    }, 5000)
    setTimeout(function(){
      thing.addEventListener("click", getPlayerTwo)
    }, 10000)
    setTimeout(function(){
      thing.removeEventListener("click", getPlayerOne)
    })
    
    
  }
}





function getPlayerOne() {
  console.log("hello")
  playerOne = this.id;
  console.log("Player One is " + playerOne)
  // this.removeEventListener("click", getPlayerOne)
}

function getPlayerTwo() {
  console.log("hello")
  playerTwo = this.id;
  console.log("Player Two is" + playerTwo)
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