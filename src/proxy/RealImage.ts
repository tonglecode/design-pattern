import Image from "./interface/Image";

export default class RealImage implements Image {
  private _domLayout: HTMLDivElement = null;
  private _domTitle: HTMLDivElement = null;
  private _domImage: HTMLImageElement = null;
  private _domLoading: HTMLDivElement = null;

  constructor(
    private _title: string,
    private _url: string,
    private _parent: Element
  ) {
    this._domLayout = document.createElement("div");
    this._domLayout.classList.add("layout");
    this._parent.append(this._domLayout);

    this._domTitle = document.createElement("div");
    this._domTitle.classList.add("title");
    this._domTitle.innerText = this._title;
    this._domLayout.append(this._domTitle);

    this._domLoading = document.createElement("div");
    this._domLoading.classList.add("loading");
    this._domLoading.innerText = "Loading...";
  }

  append(): void {
    if (this._domImage) return;
    this._domImage = new Image(); //HTMLImageElement

    this._domLayout.append(this._domLoading);
    this._domImage.src = this._url;

    this._domImage.onload = () => {
      setTimeout(() => {
        this._domLayout.replaceChild(this._domImage, this._domLoading);
      }, Math.random() * 5000 + 3000);
    };
  }
}
