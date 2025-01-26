import { Action } from "./enum/Action";
import Memento from "./store/Memento";

export default class BlindMan {
  private _actions = new Array<Action>();
  constructor(
    private _currentX: number,
    private _currentY: number,
    private _targetX: number,
    private _targetY: number
  ) {}

  get target(): { x: number; y: number } {
    return { x: this._targetX, y: this._targetY };
  }

  walk(action: Action): number {
    this._actions.push(action);

    if (action === Action.UP) this._currentY += 1;
    else if (action === Action.RIGHT) this._currentX += 1;
    else if (action === Action.DOWN) this._currentY -= 1;
    else if (action === Action.LEFT) this._currentX -= 1;

    return Math.sqrt(
      Math.pow(this._currentX - this._targetX, 2) +
        Math.pow(this._currentY - this._targetY, 2)
    );
  }

  createMenento(): Memento {
    const memento = new Memento(this._currentX, this._currentY, this._actions);
    return memento;
  }

  restoreMemento(memento: Memento) {
    this._currentX = memento.x;
    this._currentY = memento.y;
    this._actions = structuredClone(memento.actions);
  }

  resultPath(): string[] {
    return this._actions.map((action) => Action[action]);
  }
}
