import Display from "../interfaces/Display.interface";

export default class Draft {
  constructor(
    private _title: string,
    private _auther: string,
    private _content: string[]
  ) {}

  getTitle() {
    return this._title;
  }
  getAuther() {
    return this._auther;
  }
  getContent() {
    return this._content;
  }

  print(display: Display): void {
    display.title(this);
    display.auther(this);
    display.content(this);
  }
}
