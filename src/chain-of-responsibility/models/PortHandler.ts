import { Handler } from "./abstract/Handler";

export class PortHandle extends Handler {
  protected process(url: string): void {
    const index = url.lastIndexOf(":"); // 포트가 없는 경우 에러
    if (index !== -1) {
      const portStr = url.substring(index + 1);
      if (!isNaN(Number(portStr))) {
        this.displayResult("PORT", portStr);
        return;
      }
    }
    this.displayResult("PORT", "NONE");
  }
}
