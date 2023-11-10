// VARIABLES
var player1 = createPlayer("human", "👩🏽");
var player2 = createPlayer("Computer", "💻");
// var fighter1 = player1.fighter;
// var fighter2 = player2.fighter;
var classicGame = selectGameType("classic");
var difficultGame = selectGameType("difficult");
var classicFighters = ["rock", "paper", "scissors"]
var difficultFighters = ["rock", "paper", "scissors", "lizzard", "alien"]
// var fighter1 = player1.fighter;
// var fighter2 = player2.fighter;



// EVENT LISTENERS



// FUNCTIONS
function createPlayer(name, token, wins = 0) {
  var player = {
    name,
    token,
    wins,
  };
  return player;
}

function createGame(player1, player2, gameType, fighters) {
  var game = {
    opponents: [player1, player2],
    gameType,
    fighters
  }
  return game;
}

//will put event listener on this function
//will need to tell DOM to display appropriate gameType view in HTML based on what was selected
function selectGameType(gameType) {
  var fighterOptions;
  if (gameType === "classic") {
    fighterOptions = classicFighters;
  } else {
    fighterOptions = difficultFighters;
  }
  var createdGame = createGame(player1, player2, gameType, fighterOptions)
  return createdGame
}

// console.log(selectGameType("classic"))
// console.log(selectGameType("difficult"))

// ============================================================

function getRandomFighter(fighters) {
  return fighters[Math.floor(Math.random() * fighters.length)];
}

function humanSelectsClassicFighter(fighter) {
  classicGame.opponents[0].fighter = fighter;
  return classicGame;
}

function humanSelectsDifficultFighter(fighter) {
  difficultGame.opponents[0].fighter = fighter;
  return difficultGame;
}

function computerSelectsClassicFighter() {
  classicGame.opponents[1].fighter = getRandomFighter(classicFighters);
  return classicGame;
}

function computerSelectsDifficultFighter() {
  difficultGame.opponents[1].fighter = getRandomFighter(difficultFighters);
  return difficultGame;
}

function SelectClassicFighters() {
  classicGame.fighters = classicFighters;
  humanSelectsClassicFighter("rock");
  computerSelectsClassicFighter();
  return classicGame
}

function SelectDifficultFighters() {
  difficultGame.fighters = difficultFighters;
  humanSelectsDifficultFighter("alien");
  computerSelectsDifficultFighter();
  return difficultGame;
}

// selectGameType("classic")
console.log(SelectClassicFighters())
console.log(SelectDifficultFighters())



// function determineWinner (player1, player2) {
//   if ((player1.fighter === "rock" && player2.fighter === ("scissors" || "lizzard")) ||
//       (player1.fighter === "paper" && player2.fighter === ("rock" || "alien")) ||
//       (player1.fighter === "scissors" && player2.fighter === ("paper" || "lizzard")) ||
//       (player1.fighter === "lizzard" && player2.fighter === ("paper" || "alien")) ||
//       (player1.fighter === "alien" && player2.fighter === ("scissors" || "rock"))) {
//     player1.wins += 1;
//   } else {
//     player2.wins += 1;
//   }
// }

// function declareOutcome (player1, player2) {
//   if (player1.fighter !== player2.fighter) {
//     determineWinner(player1, player2)
//   } else {
//     console.log("It's a draw!")
//   }
// }

// function playGame(player1, player2, game) {
//   humanSelectsFighter("rock")
//   computerSelectsFighter()
//   declareOutcome(player1, player2)
// }









/*
Final product will have 3 event listeners
  - one for selecting game (event listener on both game buttons which will invoke the function
      selectGameType which will update the player and game objects)
  - one for selecting fighter (event listener on fighter images for function playGame)
  - one for changing game (event listener on change-game-btn for function that restores the main page)
*/


// playGame(player1, player2, classicGame);
// console.log(player1)
// console.log(player2)

// selectGameType("difficult")
// playGame(player1, player2, difficultGame);
// console.log(player1)
// console.log(player2)

// selectGameType("difficult")
// playGame(player1, player2, "difficult");
// console.log(player1)
// console.log(player2)
// playGame(player1, player2, "difficult");
// console.log(player1)
// console.log(player2)
// playGame(player1, player2, "difficult");
// console.log(player1)
// console.log(player2)