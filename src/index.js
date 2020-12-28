import "fontsource-barlow-semi-condensed/700.css";
import "fontsource-barlow-semi-condensed/600.css";
import "fontsource-barlow-semi-condensed/500.css";
import "./stylesheets/index.scss";
import { setupRulesModal } from "./modal-setup";
import paperIconUrl from "./images/icon-paper.svg";
import scissorsIconUrl from "./images/icon-scissors.svg";
import rockIconUrl from "./images/icon-rock.svg";

setupRulesModal();

const handsHtml = [
  `<div class="chip blue-ring picked"><img src=${paperIconUrl} alt="Paper" class="large" /></div>`,
  `<div class="chip yellow-ring picked"><img src=${scissorsIconUrl} alt="Scissors" class="large" /></div>`,
  `<div class="chip pink-ring picked"><img src=${rockIconUrl} alt="Rock" class="large" /></div>`,
];

const gameElements = {
  score: document.querySelector(".score"),
  playground: document.querySelector(".playground"),
  loadingBot: document.querySelector(".loading-bot"),
  chips: document.querySelectorAll(".chip.choice"),
  selectionScreen: document.querySelector(".selection-screen"),
  result: document.querySelector(".result"),
  resultText: document.querySelector(".result-text"),
  playAgainBtn: document.querySelector(".play-again-btn"),
};

const gameResult = {
  "-1": "YOU LOSE",
  0: "DRAW",
  1: "YOU WON",
};

const updateScore = (change) => {
  const curScore = gameElements.score.innerHTML;
  gameElements.score.innerHTML = `${Number(curScore) + change}`;
};

const handsMap = ["paper", "scissors", "rock"];

const scoreChart = ["paper-rock", "rock-scissors", "scissors-paper"];

const calculateScore = (playerHand, houseHand) => {
  if (playerHand === houseHand) {
    return 0;
  }
  if (
    scoreChart.indexOf(`${handsMap[playerHand]}-${handsMap[houseHand]}`) !== -1
  ) {
    return 1;
  }
  return -1;
};

const onHandPicked = (event) => {
  const playerHand = Number(event.target.id || event.target.closest("div").id);
  const houseHand = Math.floor(Math.random() * 3);
  gameElements.playground.style.display = "none";
  gameElements.selectionScreen.style.display = "flex";
  document.querySelector(".selected.player").innerHTML = handsHtml[playerHand];
  setTimeout(() => {
    document.querySelector(".selected.house").innerHTML = handsHtml[houseHand];
    const score = calculateScore(playerHand, houseHand);
    updateScore(score);
    gameElements.result.style.display = "flex";
    gameElements.resultText.innerHTML = gameResult[score];
  }, 3000);
};

const resetGame = () => {
  gameElements.result.style.display = "none";
  document.querySelector(".selected.house").innerHTML =
    '<div class="loading-bot"><div class="loader"></div></div>';

  gameElements.selectionScreen.style.display = "none";
  gameElements.playground.style.display = "flex";
};

gameElements.chips.forEach((chip) => {
  chip.onclick = onHandPicked;
});

gameElements.playAgainBtn.onclick = resetGame;
