export default class King {
  private constructor() {}

  private static instance: King | undefined;

  static getInstanc(): King {
    if (this.instance === undefined) this.instance = new King();
    return this.instance;
  }

  sayHello() {
    console.log("I am only one...");
  }
}
