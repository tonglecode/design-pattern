import Image from "./interface/Image";
import RealImage from "./RealImage";

export default class ProxyImaage implements Image {
  private _image: RealImage = null;
  private _domLayout: HTMLDivElement = null;
  private _domTitle: HTMLDivElement = null;

  constructor(
    private _title: string,
    private _url: string,
    private _parent: Element
  ) {
    this._domLayout = document.createElement("div");
    this._domLayout.classList.add("layout");
    this._parent.append(this._domLayout);

    this._domTitle = document.createElement("div");
    this._domTitle.classList.add("title-proxy");
    this._domTitle.innerHTML = `<span>${this._title}</span><br/><span>Click to load</span>`;
    this._domLayout.append(this._domTitle);
  }
  append(): void {
    if (this._image) return;

    this._domLayout.addEventListener("click", () => {
      this._domLayout.style.border = "none";
      this._domLayout.innerHTML = "";
      this._image = new RealImage(this._title, this._url, this._domLayout);
      this._image.append();
    });
  }
}
