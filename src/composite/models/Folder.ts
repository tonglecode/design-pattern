import Unit from "./abstract/Unit";

export default class Folder extends Unit {
  private _units: Array<Unit> = [];

  constructor(name: string) {
    super(name);
  }

  getSize(): number {
    return this._units.reduce(
      (accumulator, unit) => accumulator + unit.getSize(),
      0
    );
  }

  add(unit: Unit) {
    this._units.push(unit);
  }

  private _createUnit(unit: Unit, dom: Element) {
    const domUnit = document.createElement("div");
    domUnit.classList.add("unit");
    domUnit.innerHTML = `<div><span>${unit.getName()}</span><span>${unit.getSize()}</span></div>`;
    dom.append(domUnit);
    return domUnit;
  }

  list(dom: Element) {
    const domUnit = this._createUnit(this, dom);
    const bFolder = this instanceof Folder;

    if (bFolder) {
      domUnit.classList.add("folder");
      this._units.forEach((unit) => {
        if (unit instanceof Folder) {
          unit.list(domUnit);
        } else {
          this._createUnit(unit, domUnit);
        }
      });
    }
  }
}
