export default abstract class Button {
  constructor(protected dom: HTMLElement, protected caption: string) {}
  abstract render(): void;
}
