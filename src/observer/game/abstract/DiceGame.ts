import Player from "../../models/abstract/Player";

export default abstract class DiceGame {
  protected players = new Array<Player>();

  addPlay(player: Player): void {
    this.players.push(player);
  }

  abstract play(): number;
}
