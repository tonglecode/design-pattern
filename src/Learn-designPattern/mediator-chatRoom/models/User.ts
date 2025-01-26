import ChatMediator from "../interface/ChatMediator";
import Colleague from "./abstact/Colleague";

export default class User extends Colleague {
  private onMessageCallback?: (message: string, sender: User) => void;
  private avatarUrl: string;

  constructor(mediator: ChatMediator, name: string) {
    super(mediator, name);
    this.name = name;
    this.avatarUrl = `/api/placeholder/40/40`;
  }

  getName(): string {
    return this.name;
  }

  getAvatarUrl(): string {
    return this.avatarUrl;
  }

  send(message: string): void {
    this.mediator.sendMessage(message, this);
  }

  receive(message: string, sender: User): void {
    if (this.onMessageCallback) {
      this.onMessageCallback(message, sender);
    }
  }

  // UI에서 메시지를 받을 때 호출할 콜백 설정
  setMessageCallback(callback: (message: string, sender: User) => void) {
    this.onMessageCallback = callback;
  }
}
