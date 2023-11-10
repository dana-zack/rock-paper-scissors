// VARIABLES
var player1 = createPlayer("human", "👩🏽");
var player2 = createPlayer("Computer", "💻");
var classicGame = createGame(player1, player2, "classic");
var difficultGame = createGame(player1, player2, "difficult");
var classicFighters = ["rock", "paper", "scissors"]
var difficultFighters = ["rock", "paper", "scissors", "lizzard", "alien"]
var p1ClassicFighter = classicGame.opponent[0].fighter;
var p2ClassicFighter = classicGame.opponent[1].fighter;
var p1DifficultFighter = difficultGame.opponent[0].fighter;
var p2DifficultFighter = difficultGame.opponent[1].fighter


// FUNCTIONS
function createPlayer(name, token, wins = 0) {
  var player = {
    name,
    token,
    wins,
  };
  return player;
}

function createGame(player1, player2, gameType) {
  var game = {
    opponents: [player1, player2],
    gameType,
  }
  return game;
}

//will put event listener on this function
//will need to tell DOM to display appropriate gameType view in HTML based on what was selected
function selectGameType(gameType) {
  if (gameType === "classic") {
    classicGame.fighters = classicFighters;
    return classicGame;
  } else {
    difficultGame.fighters = difficultFighters;
    return difficultGame;
  }
}

console.log(selectGameType("classic"))
console.log(selectGameType("difficult"))

// ==============================================================

function getRandomFighter(fighters) {
  return fighters[Math.floor(Math.random() * fighters.length)];
}

function humanSelectsClassicFighter(fighter) {
  classicGame.opponents[0].fighter = fighter;
}

function humanSelectsDifficultFighter(fighter) {
  difficultGame.opponents[0].fighter = fighter;
}

function computerSelectsClassicFighter() {
  classicGame.opponents[1].fighter = getRandomFighter(classicFighters);
}

function computerSelectsDifficultFighter() {
  difficultGame.opponents[1].fighter = getRandomFighter(difficultFighters);
}

// ==============================================================

function selectClassicFighters() {
  humanSelectsClassicFighter("rock");
  computerSelectsClassicFighter();
}

function selectDifficultFighters() {
  humanSelectsDifficultFighter("alien");
  computerSelectsDifficultFighter();
}

// selectClassicFighters()
// console.log(classicGame)
selectDifficultFighters()
console.log(difficultGame)

// ===============================================================

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



























// // VARIABLES
// var player1 = createPlayer("human", "👩🏽");
// var player2 = createPlayer("Computer", "💻");
// var opponents = [player1, player2]
// var classicGame = selectGameType("classic");
// var difficultGame = selectGameType("difficult");
// var classicFighters = ["rock", "paper", "scissors"]
// var difficultFighters = ["rock", "paper", "scissors", "lizzard", "alien"]

// function createPlayer(name, token, wins = 0) {
//   var player = {
//     name,
//     token,
//     wins,
//   };
//   return player;
// }

// function createGame(opponents, gameType) {
//   var game = {
//     opponents,
//     gameType,
//   }
//   return game;
// }

// //will put event listener on this function
// //will need to tell DOM to display appropriate gameType view in HTML based on what was selected
// function selectGameType(gameType) {
//   if (gameType === "classic") {
//     for (var i = 0; i < opponents.length; i++) {
//       opponents[i].fighterOptions = classicFighters;
//     }
//   } else {
//     for (var i = 0; i < opponents.length; i++) {
//       opponents[i].fighterOptions = difficultFighters;
//     }
//   }
//   var createdGame = createGame(opponents, gameType);
//   return createdGame;
// }

// console.log(selectGameType("classic"))
// console.log(selectGameType("difficult"))
