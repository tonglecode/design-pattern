import Article from "./Article";

export default abstract class DisplayArticleTemplate {
  //추상클래스로 abstract를 입력한다.
  protected article: Article; //파생 클래스에서 article에 접근하도록 protected로 지정한다.

  constructor(article: Article) {
    this.article = article;
  }

  public readonly displayHtml = () => {
    return `
	${this.titleHtml()}
	${this.contentHtml()}
	${this.footerHtml()}
	`;
  };
  // 구현하게 할 추상메서드
  protected abstract titleHtml(): string;
  protected abstract contentHtml(): string;
  protected abstract footerHtml(): string;
}
