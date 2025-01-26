import ChatRoom from "./ChatRoom";
import User from "./models/User";

export default class ChatUI {
  private container: HTMLDivElement;
  private messageArea: HTMLDivElement;
  private messageInput: HTMLInputElement;
  private currentUser: User | null = null;
  private chatRoom: ChatRoom;
  private userLabel: HTMLDivElement;

  constructor(
    chatRoom: ChatRoom,
    user: User,
    position: "left" | "right" = "left"
  ) {
    this.chatRoom = chatRoom;
    this.currentUser = user;
    this.container = document.createElement("div");
    this.messageArea = document.createElement("div");
    this.messageInput = document.createElement("input");
    this.userLabel = document.createElement("div");

    this.container.style.float = position;
    this.container.style.marginLeft = position === "right" ? "20px" : "0";

    this.createUI();
    this.attachEventListeners();
    this.setupMessageHandling();
  }

  private createUI(): void {
    this.container.className = "chat-container";

    // 사용자 라벨 추가
    this.userLabel.className = "chat-header";
    this.userLabel.textContent = `${this.currentUser?.getName()}'s Chat View`;

    this.messageArea.className = "chat-messages";

    const inputArea = document.createElement("div");
    inputArea.className = "chat-input";

    this.messageInput.type = "text";
    this.messageInput.placeholder = "Type a message...";

    const sendButton = document.createElement("button");
    sendButton.textContent = "Send";
    sendButton.onclick = () => this.sendMessage();

    inputArea.appendChild(this.messageInput);
    inputArea.appendChild(sendButton);

    this.container.appendChild(this.userLabel);
    this.container.appendChild(this.messageArea);
    this.container.appendChild(inputArea);

    let wrapper = document.getElementById("chat-wrapper");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.id = "chat-wrapper";
      wrapper.style.display = "flex";
      wrapper.style.justifyContent = "center";
      wrapper.style.gap = "20px";
      wrapper.style.padding = "20px";
      document.body.appendChild(wrapper);
    }
    wrapper.appendChild(this.container);
  }

  private attachEventListeners(): void {
    this.messageInput.addEventListener("keypress", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        this.sendMessage();
      }
    });
  }

  addMessage(message: string, isSent: boolean = false, sender?: User): void {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message-container ${isSent ? "sent" : "received"}`;

    const messageContent = document.createElement("div");
    messageContent.className = `message-content ${
      isSent ? "sent" : "received"
    }`;

    if (!isSent && sender) {
      // 프로필 컨테이너
      const profileContainer = document.createElement("div");
      profileContainer.className = "profile-container";

      // 프로필 이미지
      const avatar = document.createElement("img");
      avatar.src = sender.getAvatarUrl();
      avatar.className = "avatar";
      avatar.alt = sender.getName();

      // 사용자 이름
      const userName = document.createElement("span");
      userName.className = "user-name";
      userName.textContent = sender.getName();

      profileContainer.appendChild(avatar);
      profileContainer.appendChild(userName);
      messageDiv.appendChild(profileContainer);
    }

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    messageContent.innerHTML = `
		${message}
		<span class="message-time">${currentTime}</span>
	`;

    messageDiv.appendChild(messageContent);
    this.messageArea.appendChild(messageDiv);
    this.messageArea.scrollTop = this.messageArea.scrollHeight;
  }

  // setupMessageHandling 메서드도 수정
  private setupMessageHandling(): void {
    this.currentUser?.setMessageCallback((message, sender) => {
      const isSent = sender.getName() === this.currentUser?.getName();
      this.addMessage(message, isSent, sender);
    });
  }

  // sendMessage 메서드 수정
  private sendMessage(): void {
    const message = this.messageInput.value.trim();

    if (message && this.currentUser) {
      this.currentUser.send(message);
      this.addMessage(message, true, this.currentUser);
      this.messageInput.value = "";
    }
  }
}
