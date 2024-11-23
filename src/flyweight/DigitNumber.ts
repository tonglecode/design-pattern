import DigitFactory from "./DigitFactory";

export default class DigitNumber {
  constructor(private _factory: DigitFactory, private _num: number) {}

  async put(dom: Element) {
    const strNumber = String(this._num);
    const len = strNumber.length;
    console.log("len", len);

    dom.innerHTML = "";
    for (let i = 0; i < len; i++) {
      const div = document.createElement("div");
      console.log(strNumber[i]);

      const digit = this._factory.getDigit(parseInt(strNumber[i]));
      if (digit) digit.put(div);
      dom.appendChild(div);
    }
  }
}
