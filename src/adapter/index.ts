import Animal from "./models/abstract/Animal";
import Cat from "./models/animals/Cat";
import Dog from "./models/animals/Dog";
import TigerAdapter from "./adapters/TigerAdapter";

const list = Array<Animal>();

list.push(new Dog("댕댕이"));
list.push(new Cat("냥이"));
list.push(new TigerAdapter("호돌이"));

list.forEach((animal) => {
  animal.sound();
});
