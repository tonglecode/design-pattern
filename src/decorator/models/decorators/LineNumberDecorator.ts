import Item from "../abstracts/Item";
import Decorator from "../Decorator";

export default class LineNumberDecorator extends Decorator {
  getLineCount(): number {
    return this.targetItem.getLineCount();
  }
  getLength(idx: number): number {
    return this.targetItem.getLength(idx) + 6;
  }
  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 6;
  }
  getString(idx: number): string {
    return `<span>${String(idx + 1).padStart(
      4,
      "0"
    )}</span>: ${this.targetItem.getString(idx)}`;
  }

  constructor(targetItem: Item) {
    super(targetItem);
  }
}
