import ThreeDButton from "./3DUI/3DButton";
import ThreeDCheckBox from "./3DUI/3DCheckBox";
import ThreeDTextEdit from "./3DUI/3DTextEdit";
import Button from "./abstract/Button";
import CheckBox from "./abstract/CheckBox";
import TextEdit from "./abstract/TextEdit";
import UIFactory from "./abstract/UIFactory";

export default class ThreeDUIFactory extends UIFactory {
  createButton(dom: HTMLElement, caption: string): Button {
    return new ThreeDButton(dom, caption);
  }
  createCheckBox(dom: HTMLElement, label: string, checked: boolean): CheckBox {
    return new ThreeDCheckBox(dom, label, checked);
  }
  createTextEdit(dom: HTMLElement, text: string): TextEdit {
    return new ThreeDTextEdit(dom, text);
  }
}
