import "./style.css";
import Facade from "./models/Facade";

document.body.innerHTML += `<input /><button>조회</button><div class="result"></div>`;

const domInput = document.querySelector("input");
const domButton = document.querySelector("button");
const domResult = document.querySelector(".result");

const facade = new Facade();

domButton.addEventListener("click", () => {
  const name = domInput.value;

  facade.queryName(
    name,
    () => {
      domInput.value = "(조회중 ...)";
      domButton.disabled = true;
    },
    () => {
      domInput.value = "";
      domButton.disabled = false;
    },
    domResult
  );
});
