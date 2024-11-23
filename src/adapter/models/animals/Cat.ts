import Animal from "../abstract/Animal";

export default class Cat extends Animal {
  sound(): void {
    console.log(`${this.name}가 야옹~`);
  }
}
