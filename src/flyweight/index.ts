import DigitFactory from "./DigitFactory";
import DigitNumber from "./DigitNumber";
import "./style.css";

const factory = new DigitFactory();

document.body.innerHTML += '<div id="tmp"></div>';

const domTarget = document.getElementById("tmp");

let value = 0;

setInterval(() => {
  const number = new DigitNumber(factory, value++);
  number.put(domTarget);
}, 100);
