import Item from "./abstracts/Item";

export default class Strings extends Item {
  getLineCount(): number {
    return this.data.length;
  }
  getLength(idx: number): number {
    if (this.data[idx]) {
      return this.data[idx].length;
    } else {
      return 0;
    }
  }
  getMaxLength(): number {
    let maxLength = 0;
    this.data.forEach((item) => {
      if (maxLength < item.length) {
        maxLength = item.length;
      }
    });
    return maxLength;
  }
  getString(idx: number): string {
    return this.data[idx];
  }
  private data = new Array<string>();

  constructor() {
    super();
  }

  add(str: string): void {
    this.data.push(str);
  }
}
