import Item from "../../interface/Item";
import { ItemNameType } from "../../types/ItemNameType";

export default abstract class Factory {
  protected abstract isCreatable(name: ItemNameType): boolean;
  protected abstract createItem(name: ItemNameType): Item;
  protected abstract postprocessItem(name: ItemNameType): void;

  create(name: ItemNameType): Item {
    const creatable = this.isCreatable(name);
    if (creatable) {
      const item = this.createItem(name);
      this.postprocessItem(name);
      return item;
    }
    return null;
  }
}
