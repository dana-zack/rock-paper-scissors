// VARIABLES
var human = createPlayer("human", "👩🏽");
var computer = createPlayer("Computer", "💻");
var game = createGame(human, computer);
var classicFighters = ["rock", "paper", "scissors"];
var difficultFighters = ["rock", "paper", "scissors", "lizard", "alien"];
var homeView = document.querySelector('.home-view');
var classicView = document.querySelector('.classic-view');
var difficultView = document.querySelector('.difficult-view');
var fighterView = document.querySelector('.fighter-view');
var battleView = document.querySelector('.battle-view');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');
var winnerAnnouncement = document.querySelector(".declare-winner");
var battleContainer = document.querySelector(".battle-container");

var images = ["<img class='fighters rock' src='assets/rock.png' alt='rock'></img>", "<img class='fighters paper' src='assets/happy-paper.png' alt='paper'></img>", "<img class='fighters scissors' src='assets/happy-scissors.png' alt='scissors'>", "<img class='fighters lizard' src='assets/lizard.png' alt='lizard'></img>", "<img class='fighters alien' src='assets/happy-alien.png' alt='alien'></img>"];
var rock = "<img class='fighters' id='rock' src='assets/rock.png' alt='rock'></img>";
var paper = "<img class='fighters' id='paper' src='assets/happy-paper.png' alt='paper'></img>";
var scissors = "<img class='fighters' id='scissors' src='assets/happy-scissors.png' alt='scissors'>";
var lizard = "<img class='fighters' id='lizard' src='assets/lizard.png' alt='lizard'></img>";
var alien = "<img class='fighters' id='alien' src='assets/happy-alien.png' alt='alien'></img>";





// EVENT LISTENERS

homeView.addEventListener('click', function(event) {
  updateGame(event);
})

fighterView.addEventListener('click', function(event) {
  hide(fighterView);
  selectFighters(event);
  declareOutcome(event);
  show(battleView);
  displayWinner(event);
  resetGame();
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
    hide(homeView);
    show(classicView);
  } else if (event.target.id === "difficult-button") {
    game.gameType = "difficult";
    game.fighterOptions = difficultFighters;
    hide(homeView);
    show(difficultView);
  }
  return game;
}

function getRandomFighter(fighters) {
  return fighters[Math.floor(Math.random() * fighters.length)];
}

function selectFighters(event) {
  if (event.target.classList.contains("fighters")) {
    game.humanFighter = event.target.id;
    game.computerFighter = getRandomFighter(game.fighterOptions);
    console.log(game);
  }
}

function determineWinner() {
  if ((game.humanFighter === "rock" && game.computerFighter === ("scissors" || "lizard")) ||
    (game.humanFighter === "paper" && game.computerFighter === ("rock" || "alien")) ||
    (game.humanFighter === "scissors" && game.computerFighter === ("paper" || "lizard")) ||
    (game.humanFighter === "lizard" && game.computerFighter === ("paper" || "alien")) ||
    (game.humanFighter === "alien" && game.computerFighter === ("scissors" || "rock"))) {
    game.human.wins += 1;
    humanWins.innerText = `Wins: ${game.human.wins}`;
    winnerAnnouncement.innerText = `Human won this round!`;
  } else {
    game.computer.wins +=1;
    computerWins.innerText = `Wins: ${game.computer.wins}`;
    winnerAnnouncement.innerText = `Computer won this round!`;
  }
}

function declareOutcome(event) {
  if (game.humanFighter !== game.computerFighter) {
    determineWinner();
  } else {
    winnerAnnouncement.innerText = `It's a draw!`;
  }
}

function displayWinner(event) {
  for (var i = 0; i < difficultFighters.length; i++) {
    if (event.target.id === difficultFighters[i]) {
      var humanPick = eval(difficultFighters[i]);
    }
    if (game.computerFighter === (difficultFighters[i])) {
      var computerPick = eval(difficultFighters[i]);
    }
    battleContainer.innerHTML = humanPick + computerPick
  }
}

function resetGame() {
  setTimeout(() => {
    hide(battleView);
    show(fighterView);
    }, 3000)
  if (game.gameType === "classic") {
    setTimeout(() => {
    show(classicView)
    }, 3000)
  } else {
    setTimeout(() => {
    show(difficultView);
    }, 3000)
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
