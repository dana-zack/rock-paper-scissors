// VARIABLES
var player1 = createPlayer("human", "👩🏽");
var player2 = createPlayer("Computer", "💻");
var classicGame = createGame(classic, player1, player2);
var difficultGame = createGame(difficult, player1, player2);

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