import Draft from "../models/Draft";
import Display from "../interfaces/Display.interface";

export default class CaptionDisplay implements Display {
  title(draft: Draft): void {
    console.log("재목 : " + draft.getTitle());
  }
  auther(draft: Draft): void {
    console.log("작가 : " + draft.getAuther());
  }
  content(draft: Draft): void {
    const contents = draft.getContent();
    console.log("내용 : ");
    contents.forEach((item) => {
      console.log(`   ${item}`);
    });
  }
}
