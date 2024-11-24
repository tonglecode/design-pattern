import DiceGame from "./game/abstract/DiceGame";
import FairDiceGame from "./game/FairDiceGame";
import EvenBettingPlayer from "./models/EvenBettingPlayer";
import NumBettingPlayer from "./models/NumBettingPlayer";
import OddBettingPlayer from "./models/OddBettingPlayer";
import "./style.css";

const game = new FairDiceGame();

const players = [
  new OddBettingPlayer("홀"),
  new EvenBettingPlayer("짝"),
  new NumBettingPlayer("초이스", [3, 5, 2]),
];

players.forEach((player) => game.addPlay(player));

document.body.innerHTML +=
  '<div class="dice">?</div><button>굴리기</button><div class="players"></div>';

function updateBoard() {
  const domPlayers = document.querySelector(".players");
  domPlayers.innerHTML = "";

  players.forEach((player) => {
    const domPlayer = document.createElement("div");
    domPlayer.innerText = player.name;
    console.log(player.name, player.Winning);

    if (player.Winning) domPlayer.classList.add("win");
    domPlayers.append(domPlayer);
  });
}

updateBoard();

document.querySelector("button").addEventListener("click", () => {
  const diceNumber = game.play();

  const diceDom = document.querySelector(".dice") as HTMLElement;

  diceDom.innerText = String(diceNumber);

  updateBoard();
});
