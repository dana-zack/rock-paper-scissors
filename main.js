// VARIABLES
var human = createPlayer("human", "👩🏽");
var computer = createPlayer("Computer", "💻");
var game = createGame(human, computer);
var classicFighters = ["rock", "paper", "scissors"];
var difficultFighters = ["rock", "paper", "scissors", "lizzard", "alien"];
var homeView = document.querySelector('.home-view');
var classicView = document.querySelector('.classic-view');
var difficultView = document.querySelector('.difficult-view');
var main = document.querySelector('main');
var fighterView = document.querySelector('.fighter-view');
var battleView = document.querySelector('.battle-view');

// EVENT LISTENERS

homeView.addEventListener('click', function(event) {
  hide(homeView);
  updateGame(event);
})

fighterView.addEventListener('click', function(event) {
  hide(fighterView);
  selectFighters(event);
  declareOutcome();
  show(battleView);
})

// FUNCTIONS
function createPlayer(name, token, wins = 0) {
  var player = {
    name,
    token,
    wins,
  };
  return player;
}

function createGame(human, computer) {
  var game = {
    human,
    computer,
    gameType: "",
    fighterOptions: [],
    humanFighter: "",
    computerFighter: ""
  }
  return game;
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function updateGame(event) {
  if (event.target.id === "classic-button") {
    game.gameType = "classic";
    game.fighterOptions = classicFighters;
    show(classicView);
  } else if (event.target.id === "difficult-button") {
    game.gameType = "difficult";
    game.fighterOptions = difficultFighters;
    show(difficultView);
  }
  return game;
}

function getRandomFighter(fighters) {
  return fighters[Math.floor(Math.random() * fighters.length)];
}

function selectFighters(event) {
  if (event.target.classList.contains("fighters")) {
    game.humanFighter = event.target.alt;
    game.computerFighter = getRandomFighter(game.fighterOptions);
    console.log(game);
  }
}

function determineWinner() {
  if ((game.humanFighter === "rock" && game.computerFighter === ("scissors" || "lizzard")) ||
    (game.humanFighter === "paper" && game.computerFighter === ("rock" || "alien")) ||
    (game.humanFighter === "scissors" && game.computerFighter === ("paper" || "lizzard")) ||
    (game.humanFighter === "lizzard" && game.computerFighter === ("paper" || "alien")) ||
    (game.humanFighter === "alien" && game.computerFighter === ("scissors" || "rock"))) {
    game.human.wins += 1;
  } else {
    game.computer.wins +=1;
  }
}

function declareOutcome () {
  if (game.humanFighter !== game.computerFighter) {
    determineWinner()
  } else {
    console.log("It's a draw!")
  }
}


// ===============================================================

/*
Final product will have 3 event listeners
  - one for selecting game (event listener on both game buttons which will invoke the function
      selectGameType which will update the player and game objects)
  - one for selecting fighter (event listener on fighter images for function playGame)
  - one for changing game (event listener on change-game-btn for function that restores the main page)
*/
