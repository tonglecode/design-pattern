import King from "./King";

const king = King.getInstanc();

king.sayHello();

const king2 = King.getInstanc();

if (king === king2) {
  console.log("같은");
} else {
  console.log("다른");
}
