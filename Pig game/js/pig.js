// selecting elements//
let num1 = document.getElementById("num0");
let num2 = document.getElementById("num1");
const Newgame = document.querySelector("#new");
const roll = document.querySelector("#roll");
let hold = document.querySelector("#hold");
let image = document.querySelector(".hide");
let current1 = document.getElementById("current0");
let current2 = document.getElementById("current1");
let player1 = document.querySelector(".player1");
let player0 = document.querySelector(".player0");
let p0 = document.querySelector(".p0");
let p1 = document.querySelector(".p1");
// starting conditions //
let scores, currentscore, currentscore2, playing;

const init = function () {
  scores = [0, 0];
  currentscore = 0;
  currentscore2 = 0;
  playing = true;

  document.getElementById("current0").textContent = 0;
  document.getElementById("current1").textContent = 0;
  document.getElementById("num0").textContent = 0;
  document.getElementById("num1").textContent = 0;

  image.classList.add("hidden");
  document.querySelector(`.p${currentscore2}`).textContent = " ";
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  p1.textContent = " ";
  player0.classList.add("player");
  player1.classList.remove("player");
};
init();
const fullscore = function () {
  document.getElementById(`current${currentscore2}`).textContent = 0;
  currentscore = 0;
  currentscore3 = 0;
  currentscore2 = currentscore2 === 0 ? 1 : 0;
  player0.classList.toggle("player");
  player1.classList.toggle("player");
};

// Rolling dice functionality
roll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    image.classList.remove("hidden");
    image.src = `imgs/${dice}.jpg`;
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(
        `current${currentscore2}`
      ).textContent = currentscore;
    } else {
      fullscore();
    }
  }
});
// Holding btn
hold.addEventListener("click", function () {
  if (playing) {
    scores[currentscore2] += currentscore;
    document.getElementById(`num${currentscore2}`).textContent =
      scores[currentscore2];
    if (scores[currentscore2] >= 100) {
      playing = false;
      image.classList.add("hidden");
      document.querySelector(`.player${currentscore2}`).classList.add("winner");
      document.querySelector(`.p${currentscore2}`).textContent = "Winner";
    } else {
      fullscore();
    }
  }
});

Newgame.addEventListener("click", init);
