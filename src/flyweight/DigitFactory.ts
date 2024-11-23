import Digit from "./models/Digit";

export default class DigitFactory {
  private pool: Array<Digit | null> = [
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
    if (!this.pool[num]) {
      this.pool[num] = new Digit(
        `./flyweight/data/originalPatterns/${num}.json`
      );
    }
    return this.pool[num];
  }
}
