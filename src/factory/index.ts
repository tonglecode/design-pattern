import ItemFactory from "./model/ItemFactory";
import "./style.css";
import { ItemNameType } from "./types/ItemNameType";

// html
document.body.innerHTML += '<div id="content"></div>';
const domContent = document.getElementById("content");
const buttonsElement =
  "<div id='items'><button>Gun</button><button>Shield</button><button>Potion</button></div>";
const textarea = "<textarea>...txt</textarea>";
domContent.innerHTML = buttonsElement + textarea;

const factory = new ItemFactory();

const domOutput = document.querySelector("textarea");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    const itemName = (event.target as HTMLElement).innerText;

    const item = factory.create(itemName as ItemNameType);

    if (item) {
      domOutput.value += `\n${item.use()}`;
    } else {
      domOutput.value += `\n${itemName}을 사용할 수 없습니다.`;
    }
    domOutput.scrollTop = domOutput.scrollHeight;
  })
);
