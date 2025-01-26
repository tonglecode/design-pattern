import "./style.css";
import { items } from "./item";
import ProxyImaage from "./ProxyImage";

document.body.innerHTML += '<div class="list"></div>';

const domList = document.querySelector(".list");

items.forEach((item) => {
  const title = item[0];
  const url = item[1];

  //   const img = new RealImage(title, url, domList);
  const img = new ProxyImaage(title, url, domList);
  img.append();
});
