import Draft from "./Draft";

export default class CharactersCount extends Draft {
  charactersCount() {
    let count = 0;
    count += this.getTitle().length;
    count += this.getAuther().length;
    this.getContent().forEach((item) => {
      count += item.length;
    });
    console.log(`전체 문자수는 : ${count}`);
  }
}
