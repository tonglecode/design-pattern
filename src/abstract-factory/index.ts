import { createBodyElement } from "./body";
import ThreeDUIFactory from "./models/3DUIFactory";
import UIFactory from "./models/abstract/UIFactory";
import FlatUIFactory from "./models/FlatUIFactory";
import "./style.css";

let factory: UIFactory;

const isFlat = true;

if (isFlat) {
  factory = new FlatUIFactory();
} else {
  factory = new ThreeDUIFactory();
}

createBodyElement();

const buttonElement = document.querySelector(".button") as HTMLElement;
const checkboxElement = document.querySelector(".checkbox") as HTMLElement;
const texteditElement = document.querySelector(".textedit") as HTMLElement;

factory.createButton(buttonElement, "BUTTON");
factory.createCheckBox(checkboxElement, "CHECKBOX", true);
factory.createTextEdit(texteditElement, "Design pattern");
