import Player from "./abstract/Player";

export default class NumBettingPlayer extends Player {
  constructor(name: string, private nums: Array<number>) {
    super(name);
  }

  update(diceNumber: number): void {
    this.isWinning = this.nums.includes(diceNumber);
  }
}
