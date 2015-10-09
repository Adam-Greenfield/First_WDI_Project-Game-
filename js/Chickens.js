//users should both pick a different chicken
//fight starts, users both pick 1 move from 4
//the moves occur after both selections have been made
//if both chckens are still up, players select moves again





// time for Sudo code
// Cock fighting game like pokemon, 2 players and bonus is computer AI
// game takes turns for players to choose 1 action
// game ends when opponent's chicken is dead
// at the start of the game there will be a selection screen where each play chooses a chicken
// each chicken will be an object, maybe a JSON array with keys and properties, health:(number) moves:(functions) etc
// at the start of the game, an algorythm occurs involving a speed property, slightly random, higher value increases chance of going first, something like property number + random number, highest goes first
//turn based fight occurs, with chickens having 4 moves, the moves could also be objects in an array if the chickens need to share moves, ie movename: movefunction
//chickens have hp, maybe also some kind of mana source to cast, depending on difficulty to implement. ie certain moves reduce mana by a certain amount
//maybe 2 offensive moves to deal damage, 1 utility and 1 defensive move
//Chickens based off of one prototype chicken

//in the fight, players will both choose before the moves occur, then both will trigger one after the other depending on speed. So if a defensive option was used it might reduce or reflect damage etc. This will probably be the hardest part to implement. this also presents the problem that the two players would be able to see eachothers choices.
//there would be buttons on the screen to select a thing to do, which would call a variable as the second choice is input, then depending on the variable a different function would be called in the action bit

//so the order thus far is:

//Select chicken

//Fight begins

//both players select a move

//the moves happen

//select a move again

//move select and moves occur keeps looping untill a chicken dies

//winner is declared!


//objects I think i will need:
//Array containing chicken objects
//Array containing move objects

//chicken objects will have the following properties (Keys and values)
//move1 (Method) moves wil ultimately affect only chicken health and mana, adding things like status conditions will be mega hard, best avoided. We can make the moves interesting anyway to add flavour without actually creatingmore complex code
//move2 (Method)
//move3 (Method)
//move4 (Method)
//health: somenumber
//armor: somenumber
//(maybe)mana: somenumber
//name: somestring
//identifier for css or img



//functions I think I will need:
//all move function
//select chicken function
//chicken goes first function
//check if chicken is still alive function
