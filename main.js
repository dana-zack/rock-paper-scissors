// VARIABLES
var human = createPlayer("human", "👩🏽");
var computer = createPlayer("Computer", "💻");
var game = createGame(human, computer)
var classicFighters = ["rock", "paper", "scissors"]
var difficultFighters = ["rock", "paper", "scissors", "lizzard", "alien"]
var allViews = document.querySelector(".view")
var mainView = document.querySelector('.main-view')
var fighterView = document.querySelector('.fighter-view')
var classicView = document.querySelector('.classic-view')
var difficultView = document.querySelector('.difficult-view')

// EVENT LISTENERS

window.onload = (event) => {
  createGame(human, computer);
};

mainView.addEventListener('click', function(event) {
  hide(mainView);
  if (event.target.id === "classic-button") {
    updateClassicGame();
    show(classicView);
  } else if (event.target.id === "difficult-button") {
    updateDifficultGame();
    show(difficultView);
  }
  console.log(game)
})

classicView.addEventListener('click', function(event) {
  if (event.target.classList.contains("fighters")) {
        game.humanFighter = event.target.alt
        game.computerFighter = getRandomFighter(game.fighterOptions)
        console.log(game)
  }
}) 

difficultView.addEventListener('click', function(event) {
  if (event.target.classList.contains("fighters")) {
        game.humanFighter = event.target.alt
        game.computerFighter = getRandomFighter(game.fighterOptions)
        console.log(game)
  }
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
  element.classList.add("hidden")
}

function show(element) {
  element.classList.remove("hidden")
}

function updateClassicGame() {
  game.gameType = "classic"
  game.fighterOptions = classicFighters;
  return game
}

function updateDifficultGame() {
  game.gameType = "difficult"
  game.fighterOptions = difficultFighters;
  return game
}


// ==============================================================

function getRandomFighter(fighters) {
  return fighters[Math.floor(Math.random() * fighters.length)];
}

















// function humanSelectsFighter(fighter) {
//   var humanClassicSelection = fighter;
//   return humanClassicSelection;
//   // return updated game object
// }

// function computerSelectsClassicFighter() {
//   var computerClassicSelection = getRandomFighter(classicFighters);
//   return computerClassicSelection;
// }

// function humanSelectsDifficultFighter(fighter) {
//   var humanDifficultSelection = fighter;
//   return humanDifficultSelection;
// }

// function computerSelectsDifficultFighter() {
//   var computerDifficultSelection = getRandomFighter(classicFighters);
//   return computerDifficultSelection;
// }

// // // ==============================================================

// function selectClassicFighters() {
//   var gameRound = [];
//   var humanPlay = humanSelectsClassicFighter("rock");
//   gameRound.push(humanPlay);
//   var computerPlay = computerSelectsClassicFighter();
//   gameRound.push(computerPlay);
//   classicGame.gameData.push(gameRound)
//   return classicGame
// }

// selectClassicFighters()
// console.log(classicGame)
// selectDifficultFighters()
// console.log(difficultGame)










// ===============================================================

// function determineWinner (human, computer) {
//   if ((human.fighter === "rock" && computer.fighter === ("scissors" || "lizzard")) ||
//       (human.fighter === "paper" && computer.fighter === ("rock" || "alien")) ||
//       (human.fighter === "scissors" && computer.fighter === ("paper" || "lizzard")) ||
//       (human.fighter === "lizzard" && computer.fighter === ("paper" || "alien")) ||
//       (human.fighter === "alien" && computer.fighter === ("scissors" || "rock"))) {
//     human.wins += 1;
//   } else {
//     computer.wins += 1;
//   }
// }

// function declareOutcome (human, computer) {
//   if (human.fighter !== computer.fighter) {
//     determineWinner(human, computer)
//   } else {
//     console.log("It's a draw!")
//   }
// }

// function playGame(human, computer, game) {
//   humanSelectsFighter("rock")
//   computerSelectsFighter()
//   declareOutcome(human, computer)
// }








/*
Final product will have 3 event listeners
  - one for selecting game (event listener on both game buttons which will invoke the function
      selectGameType which will update the player and game objects)
  - one for selecting fighter (event listener on fighter images for function playGame)
  - one for changing game (event listener on change-game-btn for function that restores the main page)
*/



























// // VARIABLES
// var human = createPlayer("human", "👩🏽");
// var computer = createPlayer("Computer", "💻");
// var opponents = [human, computer]
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
