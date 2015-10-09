console.log("working");

function getChicken(){
  var selection = document.getElementsByTagName("button");
  for (i = 0; i < selection.length; i ++){
    selection[i].addEventListener("click", function(){
      return this.getAttribute("id");

    })
  }
}
function getPlayerOneChicken() = getChicken();

var playerTwoChicken = getChicken();
  //select a chicken


// Chicken objects
var Chicken = {
  chicken_name: "Something",
  health: 0,
  speed: 0,
  move1:function one(){

  },
  move2:function two(){

  },
  move3:function(){

  },
  move4:function(){
    
  },
  move5:function(){
    
  },
  move6:function(){
    
  },
  move7:function(){
    
  },
  move8: function(){
    
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
  
  

getChicken();

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