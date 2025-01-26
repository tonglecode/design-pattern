import "./style.css";

import BlindMan from "./blindMan";
import { Action } from "./enum/Action";
import Memento from "./store/Memento";

const blindMan = new BlindMan(0, 0, 10, 10);
let minDistance = Number.MAX_VALUE;
let memento: Memento = null;
while (true) {
  const action: Action = Math.floor(Math.random() * 4) + 1;
  const distance = blindMan.walk(action);

  console.log(Action[action], distance);

  if (distance === 0.0) {
    console.log("도착!");
    break;
  }

  if (minDistance > distance) {
    minDistance = distance;
    memento = blindMan.createMenento();
  } else {
    if (memento != null) {
      blindMan.restoreMemento(memento);
    }
  }
}

console.log(blindMan.resultPath());

document.body.innerHTML +=
  '<div class="container" id="visualizer">\
  <div class="path" id="marker"></div>\
  </div>';

const stepSize = 40;
let currentX = 50;
let currentY = 550;

const marker = document.getElementById("marker");
const visualizer = document.getElementById("visualizer");

marker.style.left = `${currentX}px`;
marker.style.top = `${currentY}px`;

const drawLine = (
  startX: number,
  startY: number,
  endX: number,
  endY: number
) => {
  const line = document.createElement("div");
  line.className = "line";

  const length = Math.sqrt(
    Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
  );
  const angle = (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI;

  line.style.width = `${length}px`;
  line.style.height = "4px";
  line.style.left = `${startX}px`;
  line.style.top = `${startY}px`;
  line.style.transform = `rotate(${angle}deg)`;

  visualizer.appendChild(line);
};

let delay = 0;
blindMan.resultPath().forEach((move, index) => {
  setTimeout(() => {
    const prevX = currentX;
    const prevY = currentY;

    switch (move) {
      case "UP":
        currentY -= stepSize;
        break;
      case "DOWN":
        currentY += stepSize;
        break;
      case "LEFT":
        currentX -= stepSize;
        break;
      case "RIGHT":
        currentX += stepSize;
        break;
    }

    drawLine(prevX + 5, prevY + 5, currentX + 5, currentY + 5);

    marker.style.left = `${currentX}px`;
    marker.style.top = `${currentY}px`;
  }, delay);

  delay += 300;
});
