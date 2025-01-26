import Image from "./interface/Image";

export class RealImage implements Image {
  private imageElement: HTMLImageElement | null = null;

  constructor(private url: string, private parent: HTMLElement) {}

  public display(): void {
    if (!this.imageElement) {
      this.loadImage();
    }
  }

  private loadImage(): void {
    this.imageElement = document.createElement("img");

    // Add loading state
    const loadingElement = document.createElement("div");
    loadingElement.textContent = "Loading...";
    loadingElement.className = "loading";
    this.parent.appendChild(loadingElement);

    // Load image
    this.imageElement.src = this.url;
    this.imageElement.className = "proxy-image";

    this.imageElement.onload = () => {
      // Replace loading with image
      this.parent.replaceChild(this.imageElement!, loadingElement);
    };
  }
}
