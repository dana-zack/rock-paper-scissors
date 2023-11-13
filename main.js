// VARIABLES
var human = createPlayer("human", "👩🏽");
var computer = createPlayer("Computer", "💻");
var game = createGame(human, computer)
var classicFighters = ["rock", "paper", "scissors"]
var difficultFighters = ["rock", "paper", "scissors", "lizzard", "alien"]
var homeView = document.querySelector('.home-view')
var classicView = document.querySelector('.classic-view')
var difficultView = document.querySelector('.difficult-view')
var main = document.querySelector('main')

// EVENT LISTENERS

homeView.addEventListener('click', function(event) {
  hide(homeView);
  updateGame(event);
})

main.addEventListener('click', function(event) {
  if (event.target.classList.contains("fighters")) {
        game.humanFighter = event.target.alt;
        game.computerFighter = getRandomFighter(game.fighterOptions);
        console.log(game);
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
