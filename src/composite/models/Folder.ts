import Unit from "./abstract/Unit";

export default class Folder extends Unit {
  private units: Array<Unit> = [];

  constructor(name: string) {
    super(name);
  }

  getSize(): number {
    return this.units.reduce(
      (accumulator, unit) => accumulator + unit.getSize(),
      0
    );
  }

  add(unit: Unit) {
    this.units.push(unit);
  }

  private createUnit(unit: Unit, dom: Element) {
    const domUnit = document.createElement("div");
    domUnit.classList.add("unit");
    domUnit.innerHTML = `<div><span>${unit.getName()}</span><span>${unit.getSize()}</span></div>`;
    dom.append(domUnit);
    return domUnit;
  }

  list(dom: Element) {
    const domUnit = this.createUnit(this, dom);
    const bFolder = this instanceof Folder;

    if (bFolder) {
      domUnit.classList.add("folder");
      this.units.forEach((unit) => {
        if (unit instanceof Folder) {
          unit.list(domUnit);
        } else {
          this.createUnit(unit, domUnit);
        }
      });
    }
  }
}
