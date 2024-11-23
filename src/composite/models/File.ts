import Unit from "./abstract/Unit";

export default class File extends Unit {
  constructor(name: string, private size: number) {
    super(name);
  }
  getSize(): number {
    return this.size;
  }
}
