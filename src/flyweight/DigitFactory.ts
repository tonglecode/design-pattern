import Digit from "./models/Digit";

export default class DigitFactory {
  private _pool: Array<Digit | null> = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  getDigit(num: number): Digit {
    if (!this._pool[num]) {
      this._pool[num] = new Digit(
        `./flyweight/data/originalPatterns/${num}.json`
      );
    }
    return this._pool[num];
  }
}
