import Mediator from "./interface/Mediator";
import Participant from "./models/abstract/Participant";
import CoolAircon from "./models/CoolAircon";
import Door from "./models/Door";
import HeatBoiler from "./models/HeatBoiler";
import Window from "./models/Window";

export default class SmartHome implements Mediator {
  private _door = new Door(this);
  private _window = new Window(this);
  private _heatBoiler = new HeatBoiler(this);
  private _coolAircon = new CoolAircon(this);

  participantChanged(participant: Participant): void {
    if (participant === this._door && !this._door.isClosed()) {
      this._heatBoiler.off();
      this._coolAircon.off();
    }

    if (participant === this._window && !this._window.isClosed()) {
      this._heatBoiler.off();
      this._coolAircon.off();
    }

    if (participant === this._heatBoiler && this._heatBoiler.isRunning()) {
      this._door.close();
      this._window.close();
      this._coolAircon.off();
    }

    if (participant === this._coolAircon && this._coolAircon.isRunning()) {
      this._door.close();
      this._window.close();
      this._heatBoiler.off();
    }
  }

  _display() {
    const domDoor = document.querySelector(".door") as HTMLElement;
    const domWindow = document.querySelector(".window") as HTMLElement;
    const domHeatBoiler = document.querySelector(".heatboiler") as HTMLElement;
    const domCoolAircon = document.querySelector(".coolaircon") as HTMLElement;

    this._door.displayState(domDoor);
    this._window.displayState(domWindow);
    this._heatBoiler.displayState(domHeatBoiler);
    this._coolAircon.displayState(domCoolAircon);
  }

  controll() {
    const domDoor = document.querySelector(".door") as HTMLElement;
    const domWindow = document.querySelector(".window") as HTMLElement;
    const domHeatBoiler = document.querySelector(".heatboiler") as HTMLElement;
    const domCoolAircon = document.querySelector(".coolaircon") as HTMLElement;

    domDoor.addEventListener("click", () => {
      this._door.isClosed() ? this._door.open() : this._door.close();
      this._display();
    });

    domWindow.addEventListener("click", () => {
      this._window.isClosed() ? this._window.open() : this._window.close();
      this._display();
    });

    domHeatBoiler.addEventListener("click", () => {
      this._heatBoiler.isRunning()
        ? this._heatBoiler.off()
        : this._heatBoiler.on();
      this._display();
    });

    domCoolAircon.addEventListener("click", () => {
      this._coolAircon.isRunning()
        ? this._coolAircon.off()
        : this._coolAircon.on();
      this._display();
    });
    this._display();
  }
}
