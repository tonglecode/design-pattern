import { Action } from "../enum/Action";

export default class Memento {
  private _actions = new Array<Action>();
  get actions() {
    return this._actions;
  }

  constructor(private X: number, private Y: number, actions: Array<Action>) {
    this._actions = structuredClone(actions);
  }

  get x() {
    return this.X;
  }
  get y() {
    return this.Y;
  }
}
