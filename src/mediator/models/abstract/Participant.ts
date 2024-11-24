import Mediator from "../../interface/Mediator";

export default abstract class Participant {
  constructor(protected mediator: Mediator) {}
  abstract displayState(dom: HTMLElement): void;
}
