import Car from "./models/Car";
import CarBuilder from "./models/CarBuilder";

const car1 = new Car("v6", true, "black", false, false);
car1.print();

const car2 = new CarBuilder()
  .setEngine("v12")
  .setColor("pupple")
  .setAEB(true)
  .setCameraSensor(true)
  .setAirbag(true)
  .build();

car2.print();
