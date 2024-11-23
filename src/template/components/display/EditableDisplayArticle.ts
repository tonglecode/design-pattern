import Article from "../../Article";
import DisplayArticleTemplate from "../abstracts/DisplayArticleTemplate";

export default class EditableDisplayArticle extends DisplayArticleTemplate {
  protected titleHtml(): string {
    return `<div><span>제목</span><input value="${this.article.getTitle()}" /></div>`;
  }
  protected contentHtml(): string {
    const item = this.article
      .getContent()
      .map((item) => `<li><input value="${item}"/></li>`);
    return `<ul>${item.join("")}</ul>`;
  }
  protected footerHtml(): string {
    return `<div><span>글쓴이</span> <input value="${this.article.getFooter()}" /></div>`;
  }
  constructor(article: Article) {
    super(article);
  }
}
