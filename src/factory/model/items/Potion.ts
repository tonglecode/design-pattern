import Item from "../../interface/Item";

export default class Potion implements Item {
  use(): string {
    return "물약 사용";
  }
}
