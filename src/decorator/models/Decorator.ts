import Item from "./abstracts/Item";

export default abstract class Decorator extends Item {
  constructor(protected targetItem: Item) {
    super();
  }
}
