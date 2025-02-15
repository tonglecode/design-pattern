export default class Draw {
  constructor(
    protected canvas: HTMLCanvasElement,
    protected fillColor = "FFFFFF",
    protected strokeColor = "000000"
  ) {}
  setFillColor(color: string) {
    this.fillColor = color;
  }
  setStrokeColor(color: string) {
    this.strokeColor = color;
  }
}
