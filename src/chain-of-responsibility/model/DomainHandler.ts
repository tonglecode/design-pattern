import { Handler } from "./abstract/Handler";

export class DomainHandler extends Handler {
  protected process(url: string): void {
    const urlObj = new URL(url);
    if (urlObj.hostname) {
      this.displayResult("DOMAIN", urlObj.hostname);
    } else {
      this.displayResult("DOMAIN", "NONE");
    }
  }
}
