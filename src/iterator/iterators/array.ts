import Aggregator from "../interfaces/aggregator.interface";

import Item from "../models/item.model";
import Iterator from "../interfaces/iterator.interface";
import ArrayIterator from "./arrayIterator";

class Arr implements Aggregator<Item> {
  constructor(private items: Item[]) {}

  public getItem(index: number) {
    return this.items[index];
  }

  public get count() {
    return this.items.length;
  }

  iterator(): Iterator<Item> {
    return new ArrayIterator(this);
  }
}

export default Arr;
