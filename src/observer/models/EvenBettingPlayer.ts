import Player from "./abstract/Player";

export default class EvenBettingPlayer extends Player {
  constructor(name: string) {
    super(name);
  }

  update(diceNumber: number): void {
    this.isWinning = diceNumber % 2 === 0;
  }
}
