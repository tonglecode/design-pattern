export default class Digit {
  private data: number[][] = null;

  constructor(private url: string) {}

  private async load(url: string, domOut: Element) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.data = json;
      if (domOut) this.put(domOut);
    } catch (error) {
      console.log(error);
    }
  }

  put(dom: Element): void {
    // 중요: this.data가 존재하면 그대로 사용하고 그렇지 않다면 load를 실행해 data를 가져와 this.data에 전달한다.
    if (!this.data) this.load(this.url, dom);
    else {
      dom.innerHTML = `<div class='digit-layout'></div>`;
      const domLayout = dom.querySelector(".digit-layout");

      Object.values(this.data).map((dots: Array<number>) => {
        dots.map((dot: number) => {
          const domCell = document.createElement("div");
          domCell.style.backgroundColor = dot ? "#ff0" : "333";

          domLayout.append(domCell);
        });
      });
    }
  }
}
