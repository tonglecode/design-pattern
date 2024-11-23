import Item from "../abstracts/Item";
import Decorator from "../Decorator";

export default class SideDecorator extends Decorator {
  getLineCount(): number {
    return this.targetItem.getLineCount();
  }
  getLength(idx: number): number {
    return this.targetItem.getLength(idx) + 2;
  }
  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 2;
  }
  getString(idx: number): string {
    return `<span style='color:gray'>${
      this._ch
    }</span><span>${this.targetItem.getString(
      idx
    )}</span><span style='color:gray'>${this._ch}</span>`;
  }

  constructor(targatItem: Item, private _ch: string) {
    super(targatItem);
  }
}
