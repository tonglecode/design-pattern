import CheckBox from "../abstract/CheckBox";

export default class ThreeDCheckBox extends CheckBox {
  constructor(dom: HTMLElement, lable: string, checked: boolean) {
    super(dom, lable, checked);
    this.render();
  }
  render(): void {
    this.dom.innerHTML = `
	<label>${this.label}
		<input type="checkbox" ${this.checked ? "checked='checked'" : ""}>
		<div class="box"></div>
		<div class="line"></div>
	</label>
	`;
    this.dom.classList.add("threeD-checkbox");
  }
}
