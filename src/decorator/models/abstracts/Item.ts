export default abstract class Item {
  abstract getLineCount(): number;
  abstract getLength(idx: number): number;
  abstract getMaxLength(): number;
  abstract getString(idx: number): string;

  print(dom: HTMLElement): void {
    const result = [];
    const cntLines = this.getLineCount();

    for (let i = 0; i < cntLines; i++) {
      const string = this.getString(i);
      result.push(`<p style="font-family: monospace">${string}</p>`);
    }
    dom.innerHTML = result.join("\n");
  }
}
