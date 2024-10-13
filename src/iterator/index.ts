import Item from "./item";
import Arr from "./array";

const items = [
  new Item("쿠쿠다스", 2500),
  new Item("새우깡", 1800),
  new Item("빼빼로", 1200),
  new Item("쵸코파이", 4600),
];

const array = new Arr(items);

const iter = array.iterator();

while (iter.next()) {
  const item = iter.current();
  const domItem = document.createElement("div");
  domItem.innerText = `${item.name} : ${item.cost}원`;
  document.body.appendChild(domItem);
}
