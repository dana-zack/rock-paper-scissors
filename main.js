// VARIABLES
var human = createPlayer("human", "👩🏽");
var computer = createPlayer("Computer", "💻");
var game = createGame(human, computer);
var classicFighters = ["rock", "paper", "scissors"];
var difficultFighters = ["rock", "paper", "scissors", "lizard", "alien"];
var homeView = document.querySelector('.home-view');
var classicView = document.querySelector('.classic-view');
var difficultView = document.querySelector('.difficult-view');
var bothGameViews = document.querySelector('.both-game-views');
var battleView = document.querySelector('.battle-view');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');
var winnerAnnouncement = document.querySelector(".declare-winner");
var battleContainer = document.querySelector(".battle-container");
var changeGameBtn = document.querySelector(".change-game-btn");
var rock = "<img class='selected-fighters' src='assets/rock.png' alt='rock'></img>";
var paper = "<img class='selected-fighters' src='assets/happy-paper.png' alt='paper'></img>";
var scissors = "<img class='selected-fighters' src='assets/happy-scissors.png' alt='scissors'>";
var lizard = "<img class='selected-fighters' src='assets/lizard.png' alt='lizard'></img>";
var alien = "<img class='selected-fighters' src='assets/happy-alien.png' alt='alien'></img>";

// EVENT LISTENERS

homeView.addEventListener('click', function(event) {
  if (event.target.classList.contains("main-buttons")) {
    updateGame(event);
    show(changeGameBtn);
  }
})

bothGameViews.addEventListener('click', function(event) {
  if (event.target.classList.contains("fighters")) {
    hide(bothGameViews);
    selectFighters(event);
    declareOutcome(event);
    show(battleView);
    displayWinner(event);
    resetGame();
  }
})

changeGameBtn.addEventListener('click', function() {
  switchToHome();
  hide(changeGameBtn);
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
  };
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
    switchToClassic();
  } else if (event.target.id === "difficult-button") {
    game.gameType = "difficult";
    game.fighterOptions = difficultFighters;
    switchToDifficult();
  }
  return game;
}

function getRandomFighter(fighters) {
  return fighters[Math.floor(Math.random() * fighters.length)];
}

function selectFighters(event) {
    game.humanFighter = event.target.alt;
    game.computerFighter = getRandomFighter(game.fighterOptions);
}

function determineWinner() {
  if ((game.humanFighter === "rock" && game.computerFighter === "scissors") ||
    (game.humanFighter === "rock" && game.computerFighter === "lizard") ||
    (game.humanFighter === "paper" && game.computerFighter === "rock") ||
    (game.humanFighter === "paper" && game.computerFighter === "alien") ||
    (game.humanFighter === "scissors" && game.computerFighter === "paper") ||
    (game.humanFighter === "scissors" && game.computerFighter === "lizard") ||
    (game.humanFighter === "lizard" && game.computerFighter === "paper") ||
    (game.humanFighter === "lizard" && game.computerFighter === "alien") ||
    (game.humanFighter === "alien" && game.computerFighter === "scissors") ||
    (game.humanFighter === "alien" && game.computerFighter === "rock")) {
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
    if (event.target.alt === difficultFighters[i]) {
      var humanPick = eval(difficultFighters[i]);
    }
    if (game.computerFighter === (difficultFighters[i])) {
      var computerPick = eval(difficultFighters[i]);
    }
    battleContainer.innerHTML = humanPick + computerPick;
    hide(changeGameBtn);
  }
}

function resetGame() {
  setTimeout(() => {
    hide(battleView);
    show(bothGameViews);
    show(changeGameBtn);
    }, 5000)
  if (game.gameType === "classic") {
    setTimeout(() => {
    show(classicView);
    }, 4000)
  } else {
    setTimeout(() => {
    show(difficultView);
    }, 4000)
  }
}

function switchToClassic() {
  hide(homeView);
  show(bothGameViews);
  hide(difficultView);
  show(classicView);
}

function switchToDifficult() {
  hide(homeView);
  show(bothGameViews);
  hide(classicView);
  show(difficultView);
}

function switchToHome(){
  hide(bothGameViews);
  hide(classicView);
  hide(difficultView);
  show(homeView);
}
