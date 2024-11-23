import Item from "./abstracts/Item";

export default class Strings extends Item {
  getLineCount(): number {
    return this._data.length;
  }
  getLength(idx: number): number {
    if (this._data[idx]) {
      return this._data[idx].length;
    } else {
      return 0;
    }
  }
  getMaxLength(): number {
    let maxLength = 0;
    this._data.forEach((item) => {
      if (maxLength < item.length) {
        maxLength = item.length;
      }
    });
    return maxLength;
  }
  getString(idx: number): string {
    return this._data[idx];
  }
  private _data = new Array<string>();

  constructor() {
    super();
  }

  add(str: string): void {
    this._data.push(str);
  }
}
