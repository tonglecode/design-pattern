import Aggregator from "./interface/aggregator";
import ArrayIterator from "./arrayIterator";
import Item from "./item";
import Iterator from "./interface/iterator";

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
