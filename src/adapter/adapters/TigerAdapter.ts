import Animal from "../models/abstract/Animal";
import Tiger from "../models/other/Tiger";

export default class TigerAdapter extends Animal {
  private _tiger: Tiger;

  constructor(name: string) {
    super(name);
    this._tiger = new Tiger();
    // this.tiger.name = name;
  }
  sound(): void {
    console.log(`${this.name}가 ${this._tiger.roar()}`);
  }
}
