import { ItemTypes } from "../constants/ItemTypes";
import Item from "../interface/Item";
import { ItemNameType } from "../types/ItemNameType";

import Factory from "./abstract/Factory";
import Gun from "./items/Gun";
import Potion from "./items/Potion";
import Shield from "./items/Shield";

class ItemCount {
  private _currentCount = 0;

  constructor(private _maxCount: number) {}

  get maxCount() {
    return this._maxCount;
  }

  isCreatable() {
    return this._currentCount < this._maxCount;
  }

  increaseCount() {
    if (this.isCreatable) this._currentCount++;
  }
}

export default class ItemFactory extends Factory {
  private _repositroy = new Map<ItemNameType, ItemCount>();

  constructor() {
    super();

    this._repositroy.set(ItemTypes.GUN, new ItemCount(3));
    this._repositroy.set(ItemTypes.SHIELD, new ItemCount(5));
    this._repositroy.set(ItemTypes.POTION, new ItemCount(10));
  }

  protected isCreatable(name: ItemNameType): boolean {
    const itemCount = this._repositroy.get(name);
    // null 체크 추가
    if (!itemCount) {
      throw new Error(`Invalid item name: ${name}`);
      // 또는 return false;
    }
    return itemCount.isCreatable();
  }
  protected createItem(name: ItemNameType): Item {
    let result: Item = null;

    if (name === ItemTypes.GUN) {
      result = new Gun();
    } else if (name === ItemTypes.SHIELD) {
      result = new Shield();
    } else if (name === ItemTypes.POTION) {
      result = new Potion();
    }
    return result;
  }
  protected postprocessItem(name: ItemNameType): void {
    return this._repositroy.get(name).increaseCount();
  }
}
