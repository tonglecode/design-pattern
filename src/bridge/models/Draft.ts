import Display from "../interfaces/Display.interface";

export default class Draft {
  constructor(
    private title: string,
    private auther: string,
    private content: string[]
  ) {}

  getTitle() {
    return this.title;
  }
  getAuther() {
    return this.auther;
  }
  getContent() {
    return this.content;
  }

  print(display: Display): void {
    display.title(this);
    display.auther(this);
    display.content(this);
  }
}
