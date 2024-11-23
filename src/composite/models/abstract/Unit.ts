export default abstract class Unit {
  constructor(private _name: string) {}

  getName(): string {
    return this._name;
  }

  abstract getSize(): number;
}
