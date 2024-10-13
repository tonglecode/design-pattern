export default class Article {
  private title: string;
  private content: string[];
  private footer: string;

  constructor(title: string, content: string[], footer: string) {
    this.title = title;
    this.content = content;
    this.footer = footer;
  }

  public getTitle(): string {
    return this.title;
  }

  public getContent(): string[] {
    return this.content;
  }

  public getFooter(): string {
    return this.footer;
  }
}
