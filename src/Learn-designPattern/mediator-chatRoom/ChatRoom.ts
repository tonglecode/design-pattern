import ChatMediator from "./interface/ChatMediator";
import Colleague from "./models/abstact/Colleague";
import User from "./models/User";

export default class ChatRoom implements ChatMediator {
  private colleagues: Colleague[] = [];

  sendMessage(message: string, sender: User): void {
    for (const colleague of this.colleagues) {
      if (sender != colleague) {
        colleague.receive(message, sender);
      }
    }
  }
  addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }
}
