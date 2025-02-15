import Builder from "../../abstract/Builder";
import Data from "../../Data";

export default class JsonBuilder extends Builder {
  constructor(data: Data) {
    super(data);
  }
  head(): string {
    return "{";
  }
  body(): string {
    return `Name: ${this.data.name} Age: ${this.data.age}`;
  }
  footer(): string {
    return "}";
  }
}
