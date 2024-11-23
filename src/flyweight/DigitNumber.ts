import DigitFactory from "./DigitFactory";

export default class DigitNumber {
  constructor(private factory: DigitFactory, private num: number) {}

  async put(dom: Element) {
    const strNumber = String(this.num);
    const len = strNumber.length;
    console.log("len", len);

    dom.innerHTML = "";
    for (let i = 0; i < len; i++) {
      const div = document.createElement("div");
      console.log(strNumber[i]);

      const digit = this.factory.getDigit(parseInt(strNumber[i]));
      if (digit) digit.put(div);
      dom.appendChild(div);
    }
  }
}
