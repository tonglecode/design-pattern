import Item from "../abstracts/Item";
import Decorator from "../Decorator";

export default class BoxDocorator extends Decorator {
  getLineCount(): number {
    return this.targetItem.getLineCount() + 2;
  }
  getLength(idx: number): number {
    return this.targetItem.getLength(idx) + 2;
  }
  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 2;
  }
  getString(idx: number): string {
    const maxWidth = this.getMaxLength();

    if (idx === 0 || idx === this.getLineCount() - 1) {
      return `<span style="color: orange;">+${"-".repeat(
        maxWidth - 2
      )}+</span>`;
    } else {
      return (
        `<span style=" color: orange">|</span>` +
        this.targetItem.getString(idx - 1) +
        "&nbsp;".repeat(maxWidth - this.getLength(idx - 1)) +
        `<span style="color: orange">|</span>`
      );
    }
  }

  constructor(targetItem: Item) {
    super(targetItem);
  }
}
