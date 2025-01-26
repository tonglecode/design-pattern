import { DomainHandler } from "./model/DomainHandler";
import { PortHandle } from "./model/PortHandler";
import { ProtocolHandler } from "./model/ProtocolHandler";
import "./style.css";

document.body.innerHTML += `<div class='result'>
URL<input id="url" /><button id="btn">확인</button>
</div>`;

const handler1 = new ProtocolHandler();
const handler2 = new DomainHandler();
const handler3 = new PortHandle();

handler1.setNext(handler2).setNext(handler3);

const domInput = document.querySelector("#url") as HTMLInputElement;
const domBtn = document.querySelector("#btn") as HTMLButtonElement;

if (domBtn && domInput) {
  domBtn.addEventListener("click", () => {
    const url = domInput.value;
    handler1.run(url);
  });
}
