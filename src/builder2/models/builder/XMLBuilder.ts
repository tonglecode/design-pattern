import Builder from "../../abstract/Builder";
import Data from "../../Data";

export default class XMLBuilder extends Builder {
  constructor(data: Data) {
    super(data);
  }
  head(): string {
    return "<?xml version='1.0 encoding='utf-8'><DATA>";
  }
  body(): string {
    return `<NAME>${this.data.name}</NAME><AGE>${this.data.age}</AGE>`;
  }
  footer(): string {
    return "</DATA>";
  }
}
