export default abstract class Player {
  protected isWinning: boolean = false;

  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  get Winning() {
    return this.isWinning;
  }

  abstract update(diceNumber: number): void;
}
