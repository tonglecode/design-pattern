import Colleague from "../models/abstact/Colleague";

export default interface ChatMediator {
  sendMessage(message: string, sender: Colleague): void;
  addColleague(colleague: Colleague): void;
}
