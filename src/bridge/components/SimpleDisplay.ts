import Draft from "../models/Draft";
import Display from "../interfaces/Display.interface";

export default class SimpleDisplay implements Display {
  title(draft: Draft): void {
    console.log(draft.getTitle());
  }
  auther(draft: Draft): void {
    console.log(draft.getAuther());
  }
  content(draft: Draft): void {
    const contents = draft.getContent();
    contents.forEach((item) => {
      console.log(item);
    });
  }
}
