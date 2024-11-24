import Mediator from "../interface/Mediator";
import Participant from "./abstract/Participant";

export default class Window extends Participant {
  private _isClosed = true;

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this._isClosed ? "창 Closed" : "창 Open";
    if (!this._isClosed) {
      dom.classList.add("hilighting");
    } else {
      dom.classList.remove("hilighting");
    }
  }

  constructor(mediator: Mediator) {
    super(mediator);
  }

  open(): void {
    if (!this._isClosed) return;
    this._isClosed = false;
    this.mediator.participantChanged(this);
  }

  close(): void {
    if (this._isClosed) return;
    this._isClosed = true;
    this.mediator.participantChanged(this);
  }

  isClosed() {
    return this._isClosed;
  }
}
