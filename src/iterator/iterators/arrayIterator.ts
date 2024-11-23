import Arr from "./array";
import Item from "../models/item.model";
import Iterator from "../interfaces/iterator.interface";

class ArrayIterator implements Iterator<Item> {
  private _index: number;

  constructor(private _array: Arr) {
    this._index = -1;
  }

  next(): boolean {
    this._index++;
    return this._index < this._array.count;
  }
  current(): Item {
    return this._array.getItem(this._index);
  }
}

export default ArrayIterator;
