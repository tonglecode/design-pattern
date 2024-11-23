import Unit from "./abstract/Unit";

export default class File extends Unit {
  constructor(name: string, private _size: number) {
    super(name);
  }
  getSize(): number {
    return this._size;
  }
}
