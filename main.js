// VARIABLES
var player1 = createPlayer("human", "👩🏽");
var player2 = createPlayer("Computer", "💻");
var classicGame = createGame("classic", player1, player2);
var difficultGame = createGame("difficult", player1, player2);
var classicOptions = ["rock", "paper", "scissors"]
var difficultOptions = ["rock", "paper", "scissors", "lizzard", "alien"]

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

function createGame(gameType, player1, player2) {
  var game = {
    gameType,
    opponents: [player1, player2],
  }
  return game;
}

console.log(player1)
console.log(player2)
console.log(classicGame)
console.log(difficultGame)

function humanSelectsFighter(player) {
  player.fighter = "paper"
  return player;
}

function getRandomIndex() {
  return Math.floor(Math.random() * 3);
}

console.log(getRandomIndex())
console.log(getRandomIndex())
console.log(getRandomIndex())
console.log(getRandomIndex())
console.log(getRandomIndex())

function computerSelectsFighter(player) {
  player.fighter = classicOptions[getRandomIndex()]
  return player;
}

function determineWinner (player1, player2) {
  if (player1.fighter === player2.fighter) {
    console.log("It's a draw!")
  } else {
    checkWinner(player1, player2)
  }
}

function checkWinner (player1, player2) {
  if ((player1.fighter === "rock" && player2.fighter === "scissors") ||
      (player1.fighter === "paper" && player2.fighter === "rock") ||
      (player1.fighter === "scissors" && player2.fighter === "paper")) {
    player1.wins += 1;
  } else {
    player2.wins += 1;
  }
}

function playGame(player1, player2) {
  humanSelectsFighter(player1)
  computerSelectsFighter(player2)
  determineWinner(player1, player2)
}

humanSelectsFighter(player1);
computerSelectsFighter(player2, classicOptions);
playGame(player1, player2);
console.log(player1)
console.log(player2)
playGame(player1, player2);
console.log(player1)
console.log(player2)
playGame(player1, player2);
console.log(player1)
console.log(player2)



// ==================================================================
// function fight() {
  
// }

// function selectFighters() {

// }

// function resetGameBoard() {

// }

// function findWinnerByGameType(){

// }

// function determineClassicWinner() {

// }

// function determineDifficultWinner() {

// }