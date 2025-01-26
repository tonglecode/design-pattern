import ChatRoom from "./ChatRoom";
import ChatUI from "./ChatUi";
import User from "./models/User";

function runExample() {
  // 하나의 채팅방 생성
  const chatRoom = new ChatRoom();

  // 두 사용자 생성
  const user1 = new User(chatRoom, "Alice");
  const user2 = new User(chatRoom, "Bob");
  const user3 = new User(chatRoom, "Charlie");

  // 채팅방에 사용자 추가
  chatRoom.addColleague(user1);
  chatRoom.addColleague(user2);
  chatRoom.addColleague(user3);

  // 각 사용자의 채팅 UI 생성
  new ChatUI(chatRoom, user1, "left");
  new ChatUI(chatRoom, user2, "right");
  new ChatUI(chatRoom, user3, "right");
}

document.addEventListener("DOMContentLoaded", runExample);

// 추가 CSS 스타일
const additionalStyles = `

`;

const styleElement = document.createElement("style");
styleElement.textContent = additionalStyles;
document.head.appendChild(styleElement);
