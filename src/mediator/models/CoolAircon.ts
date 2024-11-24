import Mediator from "../interface/Mediator";
import Participant from "./abstract/Participant";

export default class CoolAircon extends Participant {
  private _isOff = true;

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this._isOff ? "에어컨 OFF" : "에어컨 ON";
    if (this.isRunning()) {
      dom.classList.add("hilighting");
    } else {
      dom.classList.remove("hilighting");
    }
  }

  constructor(mediator: Mediator) {
    super(mediator);
  }

  on(): void {
    if (!this._isOff) return;
    this._isOff = false;
    this.mediator.participantChanged(this);
  }

  off(): void {
    if (this._isOff) return;
    this._isOff = true;
    this.mediator.participantChanged(this);
  }

  isRunning() {
    return !this._isOff;
  }
}
