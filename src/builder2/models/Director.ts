import Builder from "../abstract/Builder";

export default class Director {
  constructor(private builder: Builder) {}

  build() {
    return `${this.builder.head()} ${this.builder.body()} ${this.builder.footer()}`;
  }
}
