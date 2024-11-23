import Item from "../../interface/Item";
import { ItemNameType } from "../../types/ItemNameType";

export default abstract class Factory {
  protected abstract _isCreatable(name: ItemNameType): boolean;
  protected abstract _createItem(name: ItemNameType): Item;
  protected abstract _postprocessItem(name: ItemNameType): void;

  create(name: ItemNameType): Item {
    const creatable = this._isCreatable(name);
    if (creatable) {
      const item = this._createItem(name);
      this._postprocessItem(name);
      return item;
    }
    return null;
  }
}
