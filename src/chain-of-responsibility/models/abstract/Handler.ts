export abstract class Handler {
  protected nextHandler: Handler = null;

  setNext(handler: Handler) {
    this.nextHandler = handler; // 다음 처리자를 설정
    return handler; // 메서드 체이닝을 위한 반환
  }

  protected abstract process(url: string): void;

  run(url: string): void {
    this.process(url);
    if (this.nextHandler) this.nextHandler.run(url);
  }

  protected displayResult(title: string, content: string): void {
    const domLayout = document.createElement("div");
    const domTitle = document.createElement("div");
    const domContent = document.createElement("div");

    domLayout.append(domTitle, domContent);

    domLayout.classList.add("layout");
    domTitle.classList.add("title");
    domContent.classList.add("content");

    domTitle.innerText = title;
    domContent.innerText = content;

    const domTarget = document.querySelector(".result");

    domTarget.append(domLayout);
  }
}
