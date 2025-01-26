import Image from "./interface/Image";
import { RealImage } from "./RealImage";

export class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private isFirstTime: boolean = true;

  constructor(private url: string, private parent: HTMLElement) {}

  public display(): void {
    if (this.isFirstTime) {
      console.log(`First time loading: ${this.url}`);
      this.realImage = new RealImage(this.url, this.parent);
      this.isFirstTime = false;
    } else {
      console.log(`Loading from cache: ${this.url}`);
    }

    this.realImage?.display();
  }
}
