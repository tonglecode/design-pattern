import Arr from "./array";
import Item from "../models/item.model";
import Iterator from "../interfaces/iterator.interface";

class ArrayIterator implements Iterator<Item> {
  private index: number;

  constructor(private array: Arr) {
    this.index = -1;
  }

  next(): boolean {
    this.index++;
    return this.index < this.array.count;
  }
  current(): Item {
    return this.array.getItem(this.index);
  }
}

export default ArrayIterator;
