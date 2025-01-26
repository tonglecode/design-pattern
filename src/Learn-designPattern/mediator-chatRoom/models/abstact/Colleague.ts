import ChatMediator from "../../interface/ChatMediator";
import User from "../User";

export default abstract class Colleague {
  protected mediator: ChatMediator;
  protected name: string;

  constructor(mediator: ChatMediator, name: string) {
    this.mediator = mediator;
    this.name = name;
  }

  abstract send(message: string): void;
  abstract receive(message: string, sender: User): void;
}
