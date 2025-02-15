import Button from "./abstract/Button";
import CheckBox from "./abstract/CheckBox";
import TextEdit from "./abstract/TextEdit";
import UIFactory from "./abstract/UIFactory";
import FlatButton from "./FlatUI/FlatButton";
import { FlatCheckBox } from "./FlatUI/FlatCheckBox";
import FlatTextEdit from "./FlatUI/FlatTextEdit";

export default class FlatUIFactory extends UIFactory {
  createButton(dom: HTMLElement, caption: string): Button {
    return new FlatButton(dom, caption);
  }
  createCheckBox(dom: HTMLElement, label: string, checked: boolean): CheckBox {
    return new FlatCheckBox(dom, label, checked);
  }
  createTextEdit(dom: HTMLElement, text: string): TextEdit {
    return new FlatTextEdit(dom, text);
  }
}
