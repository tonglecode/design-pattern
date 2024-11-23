import Item from "../../interface/Item";

export default class Gun implements Item {
  use(): string {
    return "총 사용";
  }
}
