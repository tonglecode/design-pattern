import DiceGame from "./abstract/DiceGame";

export default class FairDiceGame extends DiceGame {
  play(): number {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    this.players.forEach((player) => {
      player.update(rollResult);
    });
    return rollResult;
  }
}
