import Item from "../../interface/Item";

export default class Shield implements Item {
  use(): string {
    return "방어막 사용";
  }
}
